import React, { useState } from 'react';
import styled from 'styled-components';


const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100vw - 300px);
  height: 100vh;
`
//Home
const ContentContainer = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  background-color: white;
`
//Profile
const ProfileBar = styled.div`
  width: 100%;
  height: 80px;
  background-color: #EFF1F4;
`
//NavBar
const NavigationBar = styled.div`
  width: 300px;
  height: 100vh;
  background-color: #F9FBFF;
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
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 16px;
  gap: 9px;
`

function AllFiles() {
  return (
    <ContentContainer>
      123
    </ContentContainer>
  );
}

function Home() {
  return (
    <ContentContainer>
      456
    </ContentContainer>
  );
}

function Profile() {
  return (
    <ProfileBar>

    </ProfileBar>
  );
}

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

  // Ico -> | ToDo: add icons provided by Aisha
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
          style={{
            backgroundColor: selectedTab===anObjectMaped.selectionTabName 
            && 
            "#E0EAFF",
            color: selectedTab===anObjectMaped.selectionTabName 
            && 
            "#074EE8"
          }}
        >
          <p>Ico</p>
          <p>{anObjectMaped.tabTitle}</p>
        </NavItem>
      )})}
    </NavigationBar>
  );
}

function App() {
  const [activeTab,setActiveTab] = useState("Home")

  const changeTab = selectedTab =>(
    setActiveTab(selectedTab)
  )

  return (
    <div style={{display:"flex", flexDirection:"row", background: "#EFF1F4"}}>
      <NavBar changeTab={changeTab} activeTab={activeTab} />
      <Content>
        <Profile/>
        {activeTab === "Home" &&(
          <Home/>
        )}
        {activeTab === "DataSources" &&(
          <ContentContainer>Empty</ContentContainer>
        )}
        {activeTab === "AllFiles" &&(
          <AllFiles/>
        )}
      </Content>
    </div>
  );
}

export default App;
