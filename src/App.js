import React, { useState } from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react';

import cloud_banner from './assets/cloud_banner.png'
import connect_data_cources from './assets/connect_data_sources_image.png'
import excel_icon from './assets/excel.png'

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
  justify-content: center;
`
const HomeDataCloudContainer = styled.div`
  width: 1024px;
  height: 235px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #F9F9F9;
  border-radius: 15px;
  align-self: center;
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
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 64px;
  background-color: #ECEEF1;
`
const ProfileIcon = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: black;
  align-self: center;
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
//AllFielesTab
const AllFilesUpload = styled(Upload)`
  width: 1024px;
  height: 140px;
  border-color: #00847A;
  border-style: dashed;
`
const TableSerchContainer = styled.div`
  width:100%;
  height: 36px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
//Table
const Search = styled.div`
  width: 100%;
  display: flex;  
  align-items: center;
`
const SearchBar = styled.input`
  box-sizing: border-box;
  width: 685px;
  border: 1px solid #CBCBCB;
  padding: 10px 0px 10px 42px;
  border-radius: 4px;
  &:focus{
    border-color: #074EE8;
  }
`
const SortFiles = styled.div`
  display: flex;
  flex-direction: row;
  align-self:center;
  padding-right: 25px;
`
const FilesTable = styled.div`
  width: 1024px;
  display: flex;
  flex-direction: column;
`
const FilesTableBar = styled.div`
  width: 1024px;
  height: 36px;
  margin-top: 24px;
  display: flex;
  flex-direction: row;
  gap: 20px;

  background: #F5F5F5;
  border: 1px solid #E6E6E6;
`
const FileContainer = styled.div`
  width: 1024px;  
  height: 272px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`
const NoFileNotificationContainer = styled.div`
  width: 162px;
  height: 104px;
  margin-top: 80px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`
const FilesTableContainer = styled.div`
  width: 1024px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`
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
//DropDownMenu
const DropDownButton = styled.button`
  width: 175px;
  height: 34px;
  padding: 8px 16px;
  border-radius: 4px;
  display: flex;
  gap: 15px;
  align-self: center;
  align-items: center;

  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  color: #63676E;

  background: #FFFFFF;
  border: 1px solid #EDEDED;
`
const DropDownItem = styled.button`
  width: 175px;
  height: 33px;
  padding: 8px 16px;
  align-self: center;
  align-items: center;

  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  color: #63676E;

  background: #FFFFFF;
  border: 1px solid #EDEDED;
`
const DropDownList = styled.ul`
  &> li:first-of-type > button{
    border-radius: 4px 4px 0px 0px;
  }
  &> li:last-of-type > button{
    border-radius: 0px 0px 4px 4px;
  }
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
      <div style={{width:"1024px"}}>
        <Text weight="600" size="24px" height="33px">Upload files</Text>
        <AllFilesUpload>
          <Icon icon="carbon:cloud-upload" style={{ fontSize: "32px", color: "#00847A", padding: "30px 0 24px 0" }}/>
          <Text size="10px" height="14px" margin="0" align="center" color="#7C8088">
            Drag and drop your files here or click to browse
          </Text>
          <Text size="10px" height="14px" margin="0" align="center" color="#7C8088">
          .csv files only. Maximum file size 500 mb
          </Text>
        </AllFilesUpload>
        {/* Uploading Files */}

        <Text weight="600" size="24px" height="33px">All files</Text>
        <Table/> 
      </div>
    </ContentContainer>
  );
}

function Table() {

  const [sortBy, setSortBy] = useState("recent");

  const changeSortSelection = sortTo => {
    setSortBy(sortTo)
  }

  return (
    <> 
      <TableSerchContainer>
        <Search>
          <Icon icon="fe:search" style={{ marginLeft: "16px", position: "absolute", color: "#63676E" }}/>
          <SearchBar 
            type="text"
            placeholder="Search">
          </SearchBar>
          <Icon icon="fe:close" style={{position: "absolute", marginLeft: `${685-32}px`, color: "#63676E" }}/>
        </Search>
        <SortFiles>
          <Icon icon="bx:sort" style={{color: "#001833", alignSelf: "center", paddingRight: "4px" }}/>
            <Text weight="600" size="12px" height="16px" color="#001833" style={{paddingRight: "16px"}}>Sort:</Text>
            <DropDownMenu selected={sortBy} changeSortSelection={changeSortSelection}/>
        </SortFiles>
      </TableSerchContainer>
      <FilesTable>
        <FilesTableBar>
          <Text 
            weight="600" size="12px" height="16px" color="#63676E" 
            style={{alignSelf: "center", width: "384px", paddingLeft: "16px"}}>
              File Name
          </Text>
          <Text 
            weight="600" size="12px" height="16px" color="#63676E" 
            style={{alignSelf: "center", textAlign: "center", width: "180px"}}>
              Size
          </Text>
          <Text 
            weight="600" size="12px" height="16px" color="#63676E" 
            style={{alignSelf: "center", textAlign: "center", width: "260px"}}>
              Date Uploaded
          </Text>
        </FilesTableBar>

        <FileContainer>
          {/* No Files */}
          {/* <NoFileNotificationContainer>
            <Icon 
              icon="mdi:file-outline" width="52" height="52" color="#7C8088" 
              style={{fontSize: "70px", alignSelf: "center"}} 
            />
            <Text 
              weight="600" size="12px" height="16px" color="#7C8088" 
              style={{textAlign: "center"}}>
                There are no files available. Please upload to view.
            </Text>
          </NoFileNotificationContainer> */}

          {/* With Files */}
          <FilesTableContainer>
            <FileItem/>
            <FileItem/>
          </FilesTableContainer>

        </FileContainer>

      </FilesTable>
    </>
  );
}

function FileItem() {

  const Icons = styled.div`
    width: 24px;
    height: 24px;
    margin-right: 38px;
    border-radius: 50%;
    display: flex; 
    justify-content: center;
    align-items: center;

    color: #63676E;
    &:hover{
      background: #CCDEFF;
    };
  `

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
        SampleCSVFile_119kb
      </Text>
      <Text 
        weight="600"
        size="12px" 
        height="16px" 
        align="center"
        color="#3D4650" 
        style={{ width: "180px", marginRight: "20px" }}
      >
        119 kb
      </Text>
      <Text 
        weight="600" 
        size="12px" 
        height="16px" 
        align="center"
        color="#3D4650" 
        style={{ width: "260px", marginRight: "38px" }}
      >
        Jul 19, 2022
      </Text>
      <Icons>
        <Icon icon="fe:import" style={{width: "16px", height: "16px"}} />
      </Icons>
      <Icons>
        <Icon icon="fe:trash" style={{width: "16px", height: "16px"}}/>
      </Icons>
    </FilesItemContainer>
  )
}

function DropDownMenu(props) {
  const changeSortSelection = props.changeSortSelection
  const selectedDropDown = props.selected

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(preValue => !preValue);
  };

  const DropDownOptions=[
    {
      optionTitle: "Recently Uploaded",
      optionName: "recent",
    },
    {
      optionTitle: "Size high to low",
      optionName: "highToLow",
    },
    {
      optionTitle: "Size low to high",
      optionName: "lowToHigh",
    },
  ]

  const objectIndex = DropDownOptions.findIndex(obj => obj.optionName === selectedDropDown)

  return (
    <>
      <DropDownButton onClick={handleOpen}>
        {DropDownOptions[objectIndex].optionTitle}
        {!isOpen ?
        (<Icon icon="fe:arrow-down" style={{color: "#63676E", alignSelf: "center", fontSize: "16px", }}/>):
        (<Icon icon="fe:arrow-up" style={{color: "#63676E", alignSelf: "center", fontSize: "16px", }}/>)
        }
      </DropDownButton>
        
      {isOpen && (
        <div style={{position: "relative"}}>
          <DropDownList style={{position: "absolute", top: "25px", right: "0", borderRadius: "20px" }}>
            {DropDownOptions.map(item=>(
              <li style={{listStyle: "none"}}>
                <DropDownItem 
                  style={ selectedDropDown===item.optionName ? 
                    {
                      background: "#E0EAFF",
                      borderColor: "#E0EAFF",
                      color: "#074EE8"
                    } : {} 
                  }
                  onClick={() => changeSortSelection(item.optionName)}
                >
                  {item.optionTitle}
                </DropDownItem>
              </li>
            ))} 
          </DropDownList>
        </div>
      )}
    </>
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
