import React from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import LinearProgress from '@mui/material/LinearProgress';

import excel_icon from '../assets/excel.png';

import { Text } from '../functions'
import { convertToMBorKB } from '../functions'


const DroppedFileContainer = styled.div`
  width: 220px;
  height: 64px;

  display: flex;
  flex-direction: row;
  
  border-bottom: 1px solid #F0F0F0;
`

function DroppedFiles({ element, removeRecentFile }) {
  return(
      <DroppedFileContainer>
      <img src={excel_icon} alt="excel icon" style={{width:"24px", height:"24px", alignSelf: "center", marginRight:"10px"}}/>
      <div 
        style={{
          display:"flex",
          flexDirection:"column",
          justifyContent:"center",
          gap:"6px",
          height:"44px",
          width:"162px",
          alignSelf:"center"
        }}
      >
        <div style={{display:"flex", flexDirection:"row", justifyContent:"flex-start", gap:"10px", height:"14px"}}>
          <Text weight="600" size="10px" height="14px" color='#3D4650' margin="0">
            {element.name.split(".")[0].length>16 ?
            `${element.name.split(".")[0].substring(0, 16) + ' . . .'}` 
            : 
            `${element.name.split(".")[0]}` 
            }
          </Text>
          <Text weight="600" size="10px" height="14px" color='#63676E' margin="0">
            {convertToMBorKB(element.data.totalBytes)}
          </Text>
          <Icon icon="fe:close" onClick={ () =>  removeRecentFile(element)} style={{ fontSize:"12px", color:"#63676E", alignSelf:"center", marginLeft: "auto"}}/>
        </div>

        <LinearProgress variant="determinate" value={element.uploadProgress} />

        <div style={{display:"flex", flexDirection:"row", justifyContent:"flex-start", height:"14px"}}>
          {
            element.uploadProgress === 100 ? (
              <Text weight="600" size="10px" height="14px" color='#63676E' margin="0">Done</Text>
              ):(<>
              <Text weight="600" size="10px" height="14px" color='#63676E' margin="0">{Math.round(element.uploadProgress)}% done</Text>
              <Text 
                weight="600" 
                size="10px" 
                height="14px" 
                color='#63676E'
                style={{marginLeft: "auto",alignSelf: "center"}}
              >
                {element.status === "paused" ? "Paused" : `${convertToMBorKB(element.bytesPerSecond)}/sec`}
              </Text>
            </>)
          }
        </div>
      </div>
    </DroppedFileContainer>
  )
}

export default DroppedFiles;