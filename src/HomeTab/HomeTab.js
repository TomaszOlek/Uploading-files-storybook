
import React from 'react';
import styled from 'styled-components';

import { Text } from '../functions'
import ConnectData from './ConnectData';
import UploadFilesContent from './UploadFilesContent';

import cloud_banner from '../assets/cloud_banner.png';

const ContentContainer = styled.div`
  width: calc(100vw - 430px);
  height: calc(100vh - 120px);
  padding: 40px 65px;

  display: flex;
  justify-content: center;

  background-color: #ffffff;
`
const HomeDataCloudContainer = styled.div`
  width: 1024px;
  height: 235px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: center;

  background-color: #F9F9F9;
  border-radius: 15px;
`
const DataCloudText = styled.div`
  width: 613px;
  height: 166px;
  padding-left: 32px;

  display: flex;
  flex-direction: column;
  align-self: center;
  gap: 16px;
`
const Button = styled.button`
  width: 134px;
  height: 35px;

  color: #00847A;
  background-color: none;
  border: 1px solid #00847A;
  border-radius: 5px;

  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;
`

function HomeTab({recentlyUploadedFiles, handleFileDrop, removeRecentFile, changeNotifiactionType}) {
  return (
    <ContentContainer style={{ flexDirection:"column", gap:"24px" }}>
      <HomeDataCloudContainer>
        <DataCloudText>
          <Text weight="600" size="24px" height="33px" margin="0px" >
            Bring all your data into Data Cloud
          </Text>
          <Text size="17px" height="22px" color="#7C8088" margin="0px">
            Your Data Cloud is the heart of your Personal Data Engine.
            By bringing your data into your personal data cloud,
            you can activate it in different apps in your Prifina account. 
          </Text>
          <Button>Learn more</Button>
        </DataCloudText>
        <img src={cloud_banner} style={{ marginRight: "88px", alignSelf: "center" }}/>
      </HomeDataCloudContainer>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", gap:"24px" }}>
        <ConnectData/>
        <UploadFilesContent onDrop={handleFileDrop} recentlyUploadedFiles={recentlyUploadedFiles} removeRecentFile={removeRecentFile} changeNotifiactionType={changeNotifiactionType}/>
      </div>
    </ContentContainer>
  );
}

export default HomeTab;