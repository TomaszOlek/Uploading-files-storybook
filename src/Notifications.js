import React from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react';

import { Text } from './functions'
import { amber } from '@mui/material/colors';

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;

  background: rgba(0, 0, 0, 0.25);
`
const ContentBox = styled.div`
  width: 260px;
  height: ${props => props.height ?  props.height : "146px"};

  display: flex;
  flex-direction: column;

  border-radius: 10px;
  background-color: #fff;
`

const FilldButton = styled.button`
  width: 100px;
  height: 24px;

  color: #F5F8F7;
  background-color: #00847A;
  border: 1px solid #00847A;
  border-radius: 5px;

  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;
`

const Button = styled.button`
  width: 100px;
  height: 24px;

  color: #00847A;
  background-color: #F5F8F7;
  border: 1px solid #00847A;
  border-radius: 5px;

  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;
`

function Notifications({notificationType, setNotificationType, selectedFile}) {

  const changeNotificationType = (type) => {
    setNotificationType(type)
  }

  // 1 - Warning Notification, 
  // 2 - Error Notification | only .scv,   
  // 3 - Error Notification | size limit, 

  return(
    <Container>
      {notificationType  === 1 &&(
        <ContentBox>
          <div style={{ position: 'absolute' }}>
            <Icon 
              icon="fe:close" 
              onClick={ () => changeNotificationType(0) } 
              style={{ 
                fontSize:"17px", 
                color:"#63676E", 
                alignSelf:"center", 
                marginLeft: "auto", 
                position: "relative",
                left: "230px",
                top: "12px",
              }}
            />
          </div>
          <Text weight="600" size="12px" color="#001833" height="18px" margin="20px 20px 10px 20px" align="center">Warning!</Text>
          <Text weight="600" size="12px" color="#7C8088" height="18px" margin="0" align="center">Your upload is not complete.</Text>
          <Text weight="600" size="12px" color="#7C8088" height="18px" margin="0" align="center">Closing now will stop the upload.</Text>
          <div style={{ display:"flex",  flexDirection:"row", justifyContent: 'space-around', marginTop: "18px"}}>
            <Button onClick={ () => changeNotificationType(0) }>Cancel</Button>
            <FilldButton>Continue</FilldButton>
          </div>
        </ContentBox>
      )}
      {notificationType  === 2 &&(
        <ContentBox height="104px">
          <div style={{ position: 'absolute' }}>
            <Icon 
              icon="fe:close" 
              onClick={ () => changeNotificationType(0) } 
              style={{ 
                fontSize:"17px", 
                color:"#63676E", 
                alignSelf:"center", 
                marginLeft: "auto", 
                position: "relative",
                left: "230px",
                top: "12px",
              }}
            />
          </div>
          <Text weight="600" size="12px" color="#F40431" height="18px" margin="20px 20px 10px 20px" align="center">Error!</Text>
          <Text weight="600" size="12px" color="#7C8088" height="18px" margin="0" align="center">Only .csv files can be uploaded.</Text>
          <Text weight="600" size="12px" color="#7C8088" height="18px" margin="0" align="center">Please upload accordingly.</Text>
        
        </ContentBox>
      )}
      {notificationType  === 3 &&(
        <ContentBox height="104px">
          <div style={{ position: 'absolute' }}>
            <Icon 
              icon="fe:close" 
              onClick={ () => changeNotificationType(0) } 
              style={{ 
                fontSize:"17px", 
                color:"#63676E", 
                alignSelf:"center", 
                marginLeft: "auto", 
                position: "relative",
                left: "230px",
                top: "12px",
              }}
            />
          </div>
          <Text weight="600" size="12px" color="#F40431" height="18px" margin="20px 20px 10px 20px" align="center">Error!</Text>
          <Text weight="600" size="12px" color="#7C8088" height="18px" margin="0" align="center">File size exceeds size limit (500 mb).</Text>
          <Text weight="600" size="12px" color="#7C8088" height="18px" margin="0" align="center">Please upload accordingly.</Text>
        
        </ContentBox>
      )}
    </Container>
  )
}

export default Notifications;