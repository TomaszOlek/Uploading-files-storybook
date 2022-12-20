
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import FileItem from './FileItem'

const FilesTableContainer = styled.div`
    width: 1024px;
    margin-top: 20px;

    display: flex;
    flex-direction: column;
    gap: 10px;
`

function Sort(sortBy,filesList){
    if (sortBy === "recent"){
        return filesList.sort((a, b) => (new Date(b.timeCreated) - new Date(a.timeCreated)))
    }else if (sortBy === "highToLow"){
        return filesList.sort((a, b) => b.size - a.size)
    }else if (sortBy === "lowToHigh"){
        return filesList.sort((a, b) => a.size - b.size)
    }
}

function SortedFiles({filesList,sortBy}) {

    const sorteList = Sort(sortBy,filesList)

    return (
        <FilesTableContainer>
            {sorteList.map((fileInfo, index)=>(
                <FileItem key={fileInfo.name}
                    timeCreated={fileInfo.timeCreated.split('T')[0]} 
                    fileName={fileInfo.name.split('.csv')[0]}
                    fileSize={fileInfo.size}
                />
            ))}
        </FilesTableContainer>
    );
}

export default SortedFiles;

