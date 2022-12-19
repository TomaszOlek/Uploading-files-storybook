import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react';

import { Text } from '../functions'
import { convertToMBorKB } from '../functions'

import excel_icon from '../assets/excel.png';

const FilesItemContainer = styled.div`
  width: 100%;
  height: 44px;
  
  display: flex;
  flex-direction: row;
  align-items: center;

  &:hover{
    background-color: #F4F8FF;
  }
`
const FilesItemIcons = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 38px;

  display: flex; 
  justify-content: center;
  align-items: center;

  color: #63676E;
  border-radius: 50%;

  &:hover{
    background: #CCDEFF;
  };
`

function FileItem({ timeCreated, fileName, fileSize }) {

  return(
    <FilesItemContainer>
      <img src={excel_icon} style={{height:"24px", width: "24px", marginLeft: "16px", marginRight: "8px"}}/>
      <Text 
        weight="600" 
        size="12px" 
        height="16px" 
        color="#3D4650" 
        style={{ width: "352px", marginRight: "20px" }}
      >
        {fileName}
      </Text>
      <Text 
        weight="600"
        size="12px" 
        height="16px" 
        align="center"
        color="#3D4650" 
        style={{ width: "180px", marginRight: "20px" }}
      >
        {convertToMBorKB(fileSize)}
      </Text>
      <Text 
        weight="600" 
        size="12px" 
        height="16px" 
        align="center"
        color="#3D4650" 
        style={{ width: "260px", marginRight: "38px" }}
      >
        {timeCreated}
      </Text>
      <FilesItemIcons>
        <Icon icon="fe:import" style={{width: "16px", height: "16px"}} />
      </FilesItemIcons>
      <FilesItemIcons>
        <Icon icon="fe:trash" style={{width: "16px", height: "16px"}}/>
      </FilesItemIcons>
    </FilesItemContainer>
  )
}

export default FileItem;