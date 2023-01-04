import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';

import {  DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { ref, uploadBytesResumable } from 'firebase/storage'
import { v4 } from 'uuid'

import { storage } from './firebase'

import NavBar from "./NavBar"
import HomeTab from "./HomeTab/HomeTab"
import AllFilesTab from "./AllFilesTab/AllFilesTab"
import Notifications from "./Notifications"


const Content = styled.div`
  width: calc(100vw - 430px);
  height: 100vh;

  display: flex;
  flex-direction: column;
`
const ContentContainer = styled.div`
  width: calc(100vw - 430px);
  height: calc(100vh - 120px);
  padding: 40px 65px;

  display: flex;
  justify-content: center;

  background-color: white;
`
//Profile
const ProfileBar = styled.div`
  width: 100%;
  height: 80px;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  background-color: #EFF1F4;
`
const ProfileBackground = styled.div`
  width: 44px;
  height: 44px;
  margin-right: 64px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #ECEEF1;
  border-radius: 50%;
`
const ProfileIcon = styled.div`
  width: 24px;
  height: 24px;

  align-self: center;

  background-color: #000000;
  border-radius: 50%;
`

// ToAdd - ProfileIcon, NotifcationIcon 
function Profile() {
  return (
    <ProfileBar>
      <ProfileBackground>
        <ProfileIcon></ProfileIcon>
        <></>  
      </ProfileBackground>
    </ProfileBar>
  );
}


function App() {
  const [activeTab,setActiveTab] = useState("Home")
  const [recentlyUploadedFiles, setRecentlyUploadedFiles] = useState([]);
  const [downloadData, setDownloadData] = useState();

  const [notificationType, setNotificationType] = useState(0);
  const [selectedFile, setSelectedFile] = useState();
  
  // Notification Types:
  // 0 - no Notification, 
  // 1 - Warning Notification, 
  // 2 - Error Notification | only .scv,   
  // 3 - Error Notification | size limit, 

  const changeTab = selectedTab =>(
    setActiveTab(selectedTab)
  )

  const changeNotifiactionType = type =>{
    setNotificationType(type)
  }

  useEffect(()=>{
    if(downloadData){
      const fileName = downloadData.data.ref._location.path_.split("/")[1]
      const index = recentlyUploadedFiles.findIndex(element =>(
        element.name === fileName
      ))

      let uploadFileData = {
        ...downloadData,
        name: fileName,
      }

      if (index === -1){
        setRecentlyUploadedFiles(prevFiles =>[
          ...prevFiles,
          uploadFileData,
        ])
      }else{

        let newArr = [...recentlyUploadedFiles]

        uploadFileData = {
          ...uploadFileData,
          bytesPerSecond: uploadFileData.lastBytesTransferred - newArr[index].lastBytesTransferred
        }

        newArr[index] = uploadFileData

        setRecentlyUploadedFiles(newArr)
      }
    }
  },[downloadData])

  const removeRecentFile = (item) => {
    if (item.progress === 100) {
      // console.log("removed from RecentFiles:", item)
      const newArray = recentlyUploadedFiles.filter( element => element.name !== item.name )
      if (newArray.length>1){
        setRecentlyUploadedFiles([])
      }else{
        setRecentlyUploadedFiles(newArray)
      }
    }else{
      const task = this.state.tasks.find((t) => t.item === item);

      // Cancel the file upload
      task.task.pause();
    }
  }

  const handleFileDrop = (item) => {
    if(item){

      const randomizedName = `${item.name + v4()}`
      const fileRef = ref(storage, `files/${randomizedName}`)
      const uploading = uploadBytesResumable(fileRef, item)

      // const handlePause = () => {
      //   this.state.task.pause();
      // }

      uploading.on('state_changed', 
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        switch (snapshot.state) {
          case 'paused':
            setDownloadData({
              data: snapshot,
              uploadSpeed: snapshot.totalBytes,
              uploadProgress: progress,
              lastBytesTransferred : snapshot.bytesTransferred,
              status: "paused",
              pauseTask: function(){
                console.log(this)
              },
            })
            break;
          case 'running':
            setDownloadData({
              data: snapshot,
              uploadSpeed: snapshot.totalBytes,
              uploadProgress: progress,
              lastBytesTransferred : snapshot.bytesTransferred,
              status: "running",
              pauseTask: function(){
                console.log(this)
              },
            })
            break;
        }
      }, 
      (error) => {
        console.log("handleFileDrop ERROR: ", error)
      });
    
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ display:"flex", flexDirection:"row", background: "#EFF1F4" }}>
        <NavBar changeTab={changeTab} activeTab={activeTab} />
        <Content>
          <Profile/>
          {activeTab === "Home" &&(
            <HomeTab recentlyUploadedFiles={recentlyUploadedFiles} handleFileDrop={handleFileDrop} removeRecentFile={removeRecentFile} changeNotifiactionType={changeNotifiactionType}/>
          )}
          {activeTab === "DataSources" &&(
            <ContentContainer>Empty</ContentContainer>
          )}
          {activeTab === "AllFiles" &&(
            <AllFilesTab recentlyUploadedFiles={recentlyUploadedFiles} onDrop={handleFileDrop} removeRecentFile={removeRecentFile}/>
          )}
        </Content>
        {notificationType != 0 && (
          <Notifications notificationType={notificationType} setNotificationType={setNotificationType} selectedFile={selectedFile}/>
        )}
      </div>
    </DndProvider>
  );
}

export default App;
