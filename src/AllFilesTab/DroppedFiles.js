import React from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import LinearProgress from '@mui/material/LinearProgress';

import excel_icon from '../assets/excel.png';

import { Text } from '../functions'
import { convertToMBorKB } from '../functions'

const FilesContainer = styled.div`
  max-width: 100%;
  /* max-height: 168px; */
  padding: 16px 12px;

  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 10px;

  border: 1px solid #CECECE;
  border-radius: 4px;

  overflow: hidden;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`
const File = styled.div`
  width: 1000px;
  min-height: 66px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 28px;

  background: #F8F8F8;
  border-radius: 4px;
`
const FileInforamtions = styled.div`
  width: 864px;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 20px;
`
const ProgressBar = styled(LinearProgress)`
  &.MuiLinearProgress-root{
    height: 8px;
    background-color: #D9D9D9;
    border-radius: 10px;
  }
  &.MuiLinearProgress-root .MuiLinearProgress-bar{
    height: 8px;
    background-color: #489BFF;
    border-radius: 10px;
  }
`

function DroppedFiles({ recentlyUploadedFiles, removeRecentFile }) {
  return (
    <FilesContainer>
      {
        recentlyUploadedFiles.map((element,index)=>(
          <File key={index}>
            <img src={excel_icon} alt="excel icon" style={{ width: '24px', height: '24px' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <FileInforamtions>
                <Text weight="600" size="12px" height="16px" align="center" margin="0">
                  {element.name.split(".")[0].length>16 ?
                  `${element.name.split(".")[0].substring(0, 16) + ' . . .'}` 
                  : 
                  `${element.name.split(".")[0]}` 
                  }
                </Text>
                <Text weight="600" size="12px" height="16px" align="center" margin="0" color="#63676E">
                  {convertToMBorKB(element.data.totalBytes)}
                </Text>
                {
                  element.uploadProgress === 100 ? (
                    <Text
                      weight="600"
                      size="10px"
                      height="14px"
                      color='#63676E'
                      margin="0" 
                      style={{
                        marginLeft: "auto"
                      }}
                    >
                      Done
                    </Text>
                  ):(<>
                    <Text 
                      weight="600"
                      size="12px"
                      height="16px"
                      align="center"
                      margin="0"
                      color="#63676E"
                      style={{
                        marginLeft: "auto"
                      }}
                    >
                      {convertToMBorKB(element.bytesPerSecond)}/sec
                    </Text>
                    <Text weight="600" size="12px" height="16px" align="center" margin="0" color="#63676E">
                      {Math.round(element.uploadProgress)}%
                    </Text>
                  </>)
                }
              </FileInforamtions>
              <ProgressBar variant="determinate" value={element.uploadProgress} />
            </div>
            <Icon onClick={ () => removeRecentFile(element) } icon="fe:close" style={{ fontSize:"24px", color:"#77797E"}} ></Icon>
          </File>
        ))
      }
    </FilesContainer>
  );
}

export default DroppedFiles;
