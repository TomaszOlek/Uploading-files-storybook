
import React from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react';

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
  border-left: 2px solid #074EE8;
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

function NavBar({ changeTab, activeTab }) {
    // ToAdd - Ico -> add icons provided by Aisha
    const navigationTabs=[
      {
        tabTitle: "Home",
        selectionTabName: "Home",
        Icon: "bx:home-alt",
      },
      {
        tabTitle: "Data Sources",
        selectionTabName: "DataSources",
        Icon: "mingcute:lightning-line",
      },
      {
        tabTitle: "All Files",
        selectionTabName: "AllFiles",
        Icon: "mdi:file-document-outline",
      },
    ]
    //, alignSelf:"center", marginLeft: "auto"
  
    return (
      <NavigationBar>
        <NavBarTitle>
        <Icon icon="ic:outline-cloud-queue" style={{ fontSize:"24px", color:"#111111"}}/>
          Data Cloud
        </NavBarTitle>
        {navigationTabs.map((tab)=>(
          <NavItem key={tab.selectionTabName}
            onClick={()=> changeTab(tab.selectionTabName)} 
            style={
              activeTab===tab.selectionTabName
              ?
              {
                backgroundColor:"#E0EAFF",
                color:"#074EE8",
                borderColor: "#074EE8",
              }
              :{}
            }
          >
            <Icon icon={tab.Icon} style={{ fontSize:"24px", color:"#111111"}}/>
            <p>{tab.tabTitle}</p>
          </NavItem>
        ))}
      </NavigationBar>
    );
}

export default NavBar;