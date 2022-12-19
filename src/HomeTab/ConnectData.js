
import React from 'react';
import styled from 'styled-components';

import { Text } from '../functions'

import connect_data_cources from '../assets/connect_data_sources_image.png';

const ConnectDataContainer = styled.div`
  min-width: 500px;
  height: 360px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  gap: 40px;

  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0px 12px 24px rgba(182, 204, 214, 0.2);
`

const FilldButton = styled.button`
  width: 134px;
  height: 35px;

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

export default ConnectData;