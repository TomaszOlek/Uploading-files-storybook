
import React, { useState } from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react';

import { useDrop } from 'react-dnd';
import { NativeTypes } from 'react-dnd-html5-backend';

import { Text } from '../functions'
import Table from './Table'
import DroppedFiles from './DroppedFiles'

const ContentContainer = styled.div`
  width: calc(100vw - 430px);
  height: calc(100vh - 120px);
  padding: 40px 65px 0px 65px;

  display: flex;
  justify-content: center;

  background-color: white;

  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`
const AllFilesScroll = styled.div`
  width: 1024px;
`
const Upload = styled.div`
  width: 1020px;
  height: 140px;
  margin-bottom: 30px;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-self: center;
  align-items:  center;
  justify-content: center;

  background-color: #F0FDFC;
  border: 1px dashed #00847A;
`
const UploadLabel = styled.label`
  width: 1020px;
  height: 140px;

  background-color: none;
  position: absolute;
`

//ToAdd - Error Notification
function AllFilesTab({ recentlyUploadedFiles, onDrop, removeRecentFile, changeNotifiactionType, reRender, render }) {

  const UploadSelectedFile = (file) =>{
    if (!file) return;

    if (file.type !== "text/csv"){
      changeNotifiactionType( (prev) => ({...prev, type: 2 }))
    } else if(file.size > 524288000){
      changeNotifiactionType((prev) => ({...prev, type: 3 }))
    } else{
      if (onDrop) {
        onDrop(file);
      }
    }
  }
  const [{ canDrop, isOver }, drop] = useDrop(
    () => ({
      accept: [NativeTypes.FILE],
      canDrop: () => true,

      drop: (item) => {
        item.files.forEach((element) => {
          if (element.type !== "text/csv"){
            changeNotifiactionType((prev) => ({...prev, type: 2 }))
          } else if(element.size > 524288000){
            changeNotifiactionType((prev) => ({...prev, type: 3 }))
          } else{
            if (onDrop) {
              onDrop(element);
            }
          }
        });
      },
      collect: monitor => {
        return {
          isOver: monitor.isOver(),
          canDrop: monitor.canDrop(),
        };
      },
    }),
    [],
  );

  return (
    <ContentContainer>
      <AllFilesScroll>
        <Text weight="600" size="24px" height="33px">Upload files</Text>
        <Upload ref={drop}>
          <div style={{position: "relative", top: "-13px", left:"-510px"}}>
            <UploadLabel areFilesUploaded={recentlyUploadedFiles.length>0}>
              <input
                style={{display:"none"}}
                type="file"
                onChange={(event) => {
                  UploadSelectedFile(event.target.files[0]);
                }}
              />
            </UploadLabel>
          </div>
          <Icon icon="carbon:cloud-upload" style={{ fontSize: "32px", color: "#00847A", padding: "30px 0 24px 0" }}/>
          <Text size="10px" height="14px" margin="0" align="center" color="#7C8088">
            Drag and drop your files here or <span style={{color:"#00847A"}}>click to browse</span>
          </Text>
          <Text size="10px" height="14px" margin="0" align="center" color="#7C8088">
          .csv files only. Maximum file size 500 mb
          </Text>
        </Upload>
        {recentlyUploadedFiles.length>0 && (
          <DroppedFiles recentlyUploadedFiles={recentlyUploadedFiles} removeRecentFile={removeRecentFile} reRender={reRender}/>
        )}
        <Table render={render} reRender={reRender}/> 
      </AllFilesScroll>
    </ContentContainer>
  );
}

export default AllFilesTab;