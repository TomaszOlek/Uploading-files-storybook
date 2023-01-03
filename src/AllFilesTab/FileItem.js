import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react';

import { Text } from '../functions'
import { convertToMBorKB } from '../functions'
import { storage } from '../firebase'
import { ref, deleteObject, getDownloadURL  } from 'firebase/storage'


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

function FileItem({ timeCreated, fileName, fileSize, fileInfo, reRender }) {

  console.log(fileInfo)

  const onRemoveFile = (props) => {
    const desertRef = ref(storage, props.fullPath);

    deleteObject(desertRef).then( () => {
      console.log("file "+ props.name +" got removed")
      reRender()
    }).catch( (error) => {
      console.log("remove file error ", error)
    });

  }

  const onDownload = (props) =>  {
    getDownloadURL(ref(storage, props.fullPath))
    .then((url) => {
      const xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';
      xhr.onload = (event) => {
        const blob = xhr.response;
      };
      xhr.open('GET', url);
      xhr.send();
      window.open(url, '_blank', 'noreferrer').focus();

    })
    .catch((error) => {
      console.log("download file error ", error)
    });
  }

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
        <Icon icon="fe:import" onClick={() => onDownload(fileInfo)} style={{width: "16px", height: "16px"}} />
      </FilesItemIcons>
      <FilesItemIcons>
        <Icon icon="fe:trash" onClick={() => onRemoveFile(fileInfo)} style={{width: "16px", height: "16px"}}/>
      </FilesItemIcons>
    </FilesItemContainer>
  )
}

export default FileItem;