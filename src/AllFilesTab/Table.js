
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react';

import { ref, listAll, getMetadata } from 'firebase/storage'
import { storage } from '../firebase'

import { Text } from '../functions'
import DropDownMenu from './DropDownMenu'
import NoFilesAvailable from './NoFilesAvailable'
import SortedFiles from './SortedFiles'
import { width } from '@mui/system';

const Search = styled.div`
  width: 100%;

  display: flex;  
  align-items: center;
`
const SearchBar = styled.input`
  width: 685px;
  padding: 10px 0px 10px 42px;

  box-sizing: border-box;

  border: 1px solid #CBCBCB;
  border-radius: 4px;

  &:focus{
    border-color: #074EE8;
  }
`
const SortFiles = styled.div`
  padding-right: 25px;

  display: flex;
  flex-direction: row;
  align-self:center;
`
const FilesTable = styled.div`
  width: 1024px;

  display: flex;
  flex-direction: column;
`
const FilesTableBar = styled.div`
  width: 1024px;
  height: 36px;
  margin-top: 24px;

  display: flex;
  flex-direction: row;
  gap: 20px;

  background: #F5F5F5;
  border: 1px solid #E6E6E6;
`
const FileContainer = styled.div`
  width: 1024px;  
  height: 272px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`
const TableSerchContainer = styled.div`
  width:100%;
  height: 36px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

function Table({ render , reRender }) {
  const [sortBy, setSortBy] = useState("recent");
  const [filesList, setFilesList] = useState([]);

  const changeSortSelection = sortTo => {
    setSortBy(sortTo)
  }

  const filesListRef = ref(storage, "files/")

  useEffect(()=>{
    setFilesList([])
    listAll(filesListRef).then((res)=>{
      res.items.forEach((item)=>{
        getMetadata(item).then((metadata) => {
          setFilesList((prev) => [...prev, metadata])
          console.log("rerender")
        })
      })
    })
  }, [render])

  return (
    <> 
      <TableSerchContainer>
        <Search>
          <div style={{position:"relative", height:"0", width:"0"}}>
            <Icon icon="fe:search" style={{ left: "16px", top: "-7px", position: "absolute", color: "#63676E" }}/>
          </div>
          <SearchBar 
            type="text"
            placeholder="Search">
          </SearchBar>
          <Icon icon="fe:close" style={{position: "relative", right: "25px", color: "#63676E" }}/>
        </Search>
        <SortFiles>
          <Icon icon="bx:sort" style={{color: "#001833", alignSelf: "center", paddingRight: "4px" }}/>
            <Text weight="600" size="12px" height="16px" color="#001833" style={{paddingRight: "16px"}}>Sort:</Text>
            <DropDownMenu selected={sortBy} changeSortSelection={changeSortSelection}/>
        </SortFiles>
      </TableSerchContainer>
      <FilesTable>
        <FilesTableBar>
          <Text 
            weight="600" size="12px" height="16px" color="#63676E" 
            style={{alignSelf: "center", width: "384px", paddingLeft: "16px"}}>
              File Name
          </Text>
          <Text 
            weight="600" size="12px" height="16px" color="#63676E" 
            style={{alignSelf: "center", textAlign: "center", width: "180px"}}>
              Size
          </Text>
          <Text 
            weight="600" size="12px" height="16px" color="#63676E" 
            style={{alignSelf: "center", textAlign: "center", width: "260px"}}>
              Date Uploaded
          </Text>
        </FilesTableBar>

        <FileContainer>
          {
            filesList>0 ? 
            (<NoFilesAvailable/>) 
            : 
            (<SortedFiles filesList={filesList} sortBy={sortBy} reRender={reRender}/>)
          }
        </FileContainer>

      </FilesTable>
    </>
  );
}

export default Table;