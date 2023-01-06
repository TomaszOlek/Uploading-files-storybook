
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import FileItem from './FileItem'

const FilesTableContainer = styled.div`
    width: 1024px;
    /* height: 650px; */
    margin-top: 20px;

    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 10px;

    overflow: hidden;
    overflow-y: auto;
    &::-webkit-scrollbar {
        display: none;
    }
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

function SortedFiles({ filesList, sortBy, reRender }) {

    const [sorteList, setSorteList] = useState([])

    useEffect(() => {
        setSorteList(Sort(sortBy,filesList))
    }, [filesList,sortBy])

    return (
        <FilesTableContainer>
            {sorteList.map((fileInfo, index)=>(
                <FileItem key={fileInfo.name}
                    timeCreated={fileInfo.timeCreated.split('T')[0]} 
                    fileName={fileInfo.name.split('.csv')[0]}
                    fileSize={fileInfo.size}
                    fileInfo={fileInfo}
                    reRender={reRender}
                />
            ))}
        </FilesTableContainer>
    );
}

export default SortedFiles;

