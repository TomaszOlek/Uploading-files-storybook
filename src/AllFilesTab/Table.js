
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react';

import { ref, listAll, getMetadata } from 'firebase/storage'
import { storage } from '../firebase'

import { Text } from '../functions'
import DropDownMenu from './DropDownMenu'
import NoFilesAvailable from './NoFilesAvailable'
import SortedFiles from './SortedFiles'

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

  overflow-y: auto;
  display: flex;
  flex-direction: column;
  &::-webkit-scrollbar {
    display: none;
  }
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
  overflow-y: auto;

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
  const [isLoading, setIsLoading] = useState(true)

  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const changeSortSelection = sortTo => {
    setSortBy(sortTo)
  }

  const searchItems = (searchValue) => {
    setSearchInput(searchValue)
  }

  useEffect(() => {
    const filesListRef = ref(storage, "files/");
    setIsLoading(true);
    setFilesList([]);
    const fetchData = async () => {
      try {
        const res = await listAll(filesListRef);
        for (let item of res.items) {
          const metadata = await getMetadata(item);
          setFilesList((prev) => [...prev, metadata]);
        }
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [render]);

  useEffect(()=>{
    if (searchInput !== "") {
      const filteredData = filesList.filter((element) => {
          return element.name.split(".")[0].toLowerCase().includes(searchInput.toLowerCase())
      })
      setFilteredResults(filteredData)
    }
    else{
        setFilteredResults(filesList)
    }
  }, [filesList,searchInput])

  return (
    <div style={{
      maxHeight:"calc(100vh - 73px)", 
      paddingBottom: "24px", 
      boxSizing: "border-box",
      display: "flex", 
      flexDirection: "column", 
    }}> 
      <Text weight="600" size="24px" height="33px">All files</Text>
      <TableSerchContainer>
        <Search>
          <div style={{position:"relative", height:"0", width:"0"}}>
            <Icon icon="fe:search" style={{ left: "16px", top: "-7px", position: "absolute", color: "#63676E" }}/>
          </div>
          <SearchBar 
            onChange={(e) => searchItems(e.target.value)}
            value={searchInput}
            type="text"
            placeholder="Search">
          </SearchBar>
          {
            searchInput.length > 0
            && 
            <Icon onClick={ () => setSearchInput("") } icon="fe:close" style={{position: "relative", right: "25px", color: "#63676E" }}/>
          }
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
            (()=>{
              if(isLoading) return <div 
              style={{
                width:"162px", 
                height: "104px",
                marginTop: "80px", 
                display: "flex", 
                justifyContent: "center",
                alignItems: "center"
              }}> Loading . . . </div>

              if (filesList.length === 0){
                return <NoFilesAvailable/>
              } else {
                return <SortedFiles filesList={filteredResults} sortBy={sortBy} reRender={reRender}/>
              }
            })()
          }
        </FileContainer>

      </FilesTable>
    </div>
  );
}

export default Table;