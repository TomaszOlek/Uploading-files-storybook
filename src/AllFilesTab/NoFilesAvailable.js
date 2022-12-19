
import React from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react';

import { Text } from '../functions'

const NoFileNotificationContainer = styled.div`
  width: 162px;
  height: 104px;
  margin-top: 80px;
  
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`

function NoFilesAvailable() {
    return (
        <NoFileNotificationContainer>
            <Icon 
                icon="mdi:file-outline" width="52" height="52" color="#7C8088" 
                style={{fontSize: "70px", alignSelf: "center"}} 
            />
            <Text 
                weight="600" size="12px" height="16px" color="#7C8088" 
                style={{textAlign: "center"}}
            >
                There are no files available. Please upload to view.
            </Text>
        </NoFileNotificationContainer>
    );
}

export default NoFilesAvailable;