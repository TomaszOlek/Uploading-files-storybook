import React from 'react';
import styled from 'styled-components';


const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100vw - 300px);
  height: 100vh;
`
const ContentContainer = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  background-color: white;
`
const NavigationBar = styled.div`
  width: 300px;
  height: 100vh;
  background-color: black;
`
const ProfileBar = styled.div`
  width: 100%;
  height: 80px;
  background-color: gray;
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

function NavBar() {
  return (
    <NavigationBar>

    </NavigationBar>
  );
}

function App() {
  return (
    <div style={{display:"flex", flexDirection:"row"}}>
      <NavBar/>
      <Content>
        <Profile/>
        {true ? //later check which tab is opened insted
        <Home/>
        :
        <AllFiles/>
        }
      </Content>
    </div>
  );
}

export default App;
