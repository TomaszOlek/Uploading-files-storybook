
import React from 'react';
import styled from 'styled-components';
import { useDrop } from 'react-dnd';
import { NativeTypes } from 'react-dnd-html5-backend';
import { Icon } from '@iconify/react';

import { Text } from '../functions'
import DroppedFiles from './DroppedFiles'

const UploadFilesContainer = styled.div`
  min-width: 500px;
  height: 360px;
  border-radius: 15px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  gap: 16px;

  background-color: #ffffff;
  box-shadow: 0px 12px 24px rgba(182, 204, 214, 0.2);
`
const Upload = styled.div`
  width: ${props => props.areFilesUploaded ? "220px" : "460px" };
  height: 232px;
  margin-bottom: 30px;

  display: flex;
  flex-direction: column;
  align-self: center;
  align-items:  center;
  justify-content: center;

  background-color: #F0FDFC;
  border: 1px solid #D3F2F0;
  border-radius: 10px;
`
const RecentlyUploadedFilesContainer = styled.div`
  max-height: 232px;

  display: flex;
  justify-content: space-between;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    background: grey; 
    border-radius: 19px;
  }
  &::-webkit-scrollbar-thumb {
    background: #eeecec; 
    border-radius: 20px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #dcdcdc; 
  }
`
const ViewAllFilesBox = styled.div`
  width: 160px;

  position: relative;
  top: 10px;
  left: 0px;
  right: 0px;
  bottom: 0px;
`

function UploadFilesContent({onDrop, recentlyUploadedFiles, removeRecentFile, changeNotifiactionType}) {

  const [{ canDrop, isOver }, drop] = useDrop(
    () => ({
      accept: [NativeTypes.FILE],
      canDrop: () => true,

      drop: (item) => {
        item.files.forEach((element) => {
          if (element.type != "text/csv"){
            changeNotifiactionType(2)
          } else if(element.size > 524288000){
            changeNotifiactionType(3)
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
    <UploadFilesContainer ref={drop}>
      <div style={{marginTop:"25px"}}>
        <Text weight="600" size="20px" height="27px" margin="0" align="center">
          Upload your data
        </Text>
        <Text size="10px" height="14px" margin="8px" align="center" color="#7C8088">
          You can upload one file at a time
        </Text>
      </div>
      <div style={{display:"flex", flexDirection:"row", justifyContent:" space-around", gap:"20px"}}>
        <Upload areFilesUploaded={recentlyUploadedFiles.length>0}>
            <Text size="10px" height="14px" margin="0" align="center" color="#7C8088">
              .csv files only.
            </Text>
            <Text size="10px" height="14px" margin="0" align="center" color="#7C8088">
              Maximum file size 500 mb
            </Text>
            <Icon icon="carbon:cloud-upload" style={{ fontSize:"52px", color:"#00847A", padding:"42px" }}/>
            <Text size="10px" height="14px" margin="0" align="center" color="#7C8088">
              Drag and drop your files here or
            </Text>
            <Text size="10px" height="14px" margin="0" align="center" color="#7C8088">
              click to browse
            </Text>
        </Upload>
        {recentlyUploadedFiles.length>0 && (
          <RecentlyUploadedFilesContainer>
            <div>
              {recentlyUploadedFiles.map((element,index)=>(
                <DroppedFiles element={element} removeRecentFile={removeRecentFile} key={index}/>
              ))}
            </div>

            {recentlyUploadedFiles.length<3 && (
              <ViewAllFilesBox style={{width:"100%",marginBottom:"20px"}}>
                <Text weight="600" size="10px" align="center" height="14px" margin="0">Go to All files to view the</Text>
                <Text weight="600" size="10px" align="center" height="14px" margin="0">uploaded files,</Text>
              </ViewAllFilesBox>
            )}
          </RecentlyUploadedFilesContainer>
        )}
      </div>
    </UploadFilesContainer>
  );
}

export default UploadFilesContent;