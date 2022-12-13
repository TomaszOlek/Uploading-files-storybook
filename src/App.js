import React, { useState } from 'react';
import styled from 'styled-components';
import cloud_banner from './assets/cloud_banner.png'
import connect_data_cources from './assets/connect_data_sources_image.png'
import { Icon } from '@iconify/react';

const Text = styled.p`
  font-style: ${props => props.style ?  props.style : "normal"};
  font-weight: ${props => props.weight ?  props.weight : 400};
  font-size: ${props => props.size ?  props.size : "16px"};
  line-height: ${props => props.height ?  props.height : "22px"};
  color: ${props => props.color ?  props.color : "#1E1D1D"};
  text-align: ${props => props.align ?  props.align : "left"};
  font-family: ${props => props.family ?  props.family : "'Open Sans', sans-serif"};
  margin : ${props => true && props.margin};
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100vw - 430px);
  height: 100vh;
`
const Button = styled.button`
  width: 134px;
  height: 35px;
  background-color: none;
  border: 1px solid #00847A;
  border-radius: 5px;
  color: #00847A;

  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;
`
const FilldButton = styled(Button)`
  background-color: #00847A;
  color: #F5F8F7;
`
//Home
const ContentContainer = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  background-color: white;
  padding: 40px 65px;
  display: flex;
  align-items: center;
  
`
const HomeDataCloudContainer = styled.div`
  width: 1024px;
  height: 235px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
//Profile
const ProfileBar = styled.div`
  width: 100%;
  height: 80px;
  background-color: #EFF1F4;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
const ProfileBackground = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  margin-right: 64px;
  background-color: #ECEEF1;
  justify-content: center;
  align-items: center;
`
const ProfileIcon = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: black;
`
//NavBar
const NavigationBar = styled.div`
  width: 300px;
  height: 100vh;
  background-color: #F9FBFF;
  z-index: 1;
`
const NavBarTitle = styled.div`
  max-width: 100%;
  height: 80px;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 16px;
  gap: 9px;
`
const NavItem = styled.div`
  max-width: 100%;
  height: 50px;
  background-color: #FFFFFF;
  border-left: 2px solid #FFFFFF;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 14px;
  gap: 9px;
`
//ConnectDataContainer
const ConnectDataContainer = styled.div`
  min-width: 500px;
  height: 360px;
  border-radius: 15px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  gap: 40px;

  background-color: #ffffff;
  box-shadow: 0px 12px 24px rgba(182, 204, 214, 0.2);
`
//UploadFiles
const UploadFilesContainer = styled(ConnectDataContainer)`
  gap: 16px;
`
const Upload = styled.div`
  width: 460px;
  height: 232px;
  margin-bottom: 30px;
  border-radius: 10px;
  background-color: #F0FDFC;
  border: 1px solid #D3F2F0;
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items:  center;
  justify-content: center;
`
// ToAdd - Ico -> add icons provided by Aisha
function NavBar(props) {

  const changeTab = props.changeTab

  const selectedTab = props.activeTab

  // Add more tabs Here v
  const navigationTabs=[
    {
      tabTitle: "Home",
      selectionTabName: "Home",
      Icon: "",
    },
    {
      tabTitle: "DataSources",
      selectionTabName: "DataSources",
      Icon: "",
    },
    {
      tabTitle: "AllFiles",
      selectionTabName: "AllFiles",
      Icon: "",
    },
  ]

  return (
    <NavigationBar>
      <NavBarTitle>
        <p>Ico</p>
        Data Cloud
      </NavBarTitle>
      {navigationTabs.map((anObjectMaped)=>{
        return (
        <NavItem 
          onClick={()=> changeTab(anObjectMaped.selectionTabName)} 
          style={
            selectedTab===anObjectMaped.selectionTabName
            ?
            {
              backgroundColor:"#E0EAFF",
              color:"#074EE8",
              borderColor: "#074EE8",
            }
            :{}
          }
        >
          <p>Ico</p>
          <p>{anObjectMaped.tabTitle}</p>
        </NavItem>
      )})}
    </NavigationBar>
  );
}
// ToAdd - ProfileIcon, Notifcation 
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

function HomeTab() {
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
            <UploadFiles/>
          </div>
    </ContentContainer>
  );
}

function ConnectData() {
  return (
    <ConnectDataContainer>
      <div style={{ marginTop:"25px" }}>
        <Text weight="600" size="20px" height="27px" margin="0" align="center">
          Connect data sources
        </Text>
        <Text size="10px" height="14px" color="#7C8088" margin="2px" align="center">
          Connecting your data sources to activate this data in apps
        </Text>
      </div>
      <img src={connect_data_cources} style={{width: "339px", height: "147pxs", alignSelf:"center"}}/>
      <FilldButton style={{marginBottom: "24px", alignSelf: "center"}}>Connect</FilldButton>
    </ConnectDataContainer>
  );
}

function UploadFiles() {
  return (
    <UploadFilesContainer>
      <div style={{marginTop:"25px"}}>
        <Text weight="600" size="20px" height="27px" margin="0" align="center">
          Upload your data
        </Text>
        <Text size="10px" height="14px" margin="8px" align="center" color="#7C8088">
          You can upload one file at a time
        </Text>
      </div>
      <Upload>
          <Text size="10px" height="14px" margin="0" align="center" color="#7C8088">
            .csv files only.
          </Text>
          <Text size="10px" height="14px" margin="0" align="center" color="#7C8088">
            Maximum file size 500 mb
          </Text>
          <Icon icon="carbon:cloud-upload" style={{ fontSize: "52px", color: "#00847A", padding: "42px" }}/>
          <Text size="10px" height="14px" margin="0" align="center" color="#7C8088">
            Drag and drop your files here or
          </Text>
          <Text size="10px" height="14px" margin="0" align="center" color="#7C8088">
            click to browse
          </Text>
      </Upload>
    </UploadFilesContainer>
  );
}

function AllFilesTab() {
  return (
    <ContentContainer>
      123
    </ContentContainer>
  );
}

function App() {
  const [activeTab,setActiveTab] = useState("Home")

  const changeTab = selectedTab =>(
    setActiveTab(selectedTab)
  )

  return (
    <div style={{ display:"flex", flexDirection:"row", background: "#EFF1F4" }}>
      <NavBar changeTab={changeTab} activeTab={activeTab} />
      <Content>
        <Profile/>
        {activeTab === "Home" &&(
          <HomeTab/>
        )}
        {activeTab === "DataSources" &&(
          <ContentContainer>Empty</ContentContainer>
        )}
        {activeTab === "AllFiles" &&(
          <AllFilesTab/>
        )}
      </Content>
    </div>
  );
}

export default App;
