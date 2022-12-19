
import React, { useState } from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react';

const DropDownButton = styled.button`
  width: 175px;
  height: 34px;
  padding: 8px 16px;

  display: flex;
  align-self: center;
  align-items: center;
  gap: 15px;

  color: #63676E;
  background: #FFFFFF;
  border: 1px solid #EDEDED;
  border-radius: 4px;

  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;

`
const DropDownItem = styled.button`
  width: 175px;
  height: 33px;
  padding: 8px 16px;

  align-self: center;
  align-items: center;
  
  background: #FFFFFF;
  border: 1px solid #EDEDED;

  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  color: #63676E;
`
const DropDownList = styled.ul`
  &> li:first-of-type > button{
    border-radius: 4px 4px 0px 0px;
  }
  &> li:last-of-type > button{
    border-radius: 0px 0px 4px 4px;
  }
`

function DropDownMenu({ selected, changeSortSelection }) {

  const selectedDropDown = selected
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (option) => {
    setIsOpen(preValue => !preValue);
    if(option){
      changeSortSelection(option);
    }
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

  const selectedOptionIndex = DropDownOptions.findIndex(obj => obj.optionName === selectedDropDown)

  return (
    <>
      <DropDownButton onClick={() => handleClick()}>
        {DropDownOptions[selectedOptionIndex].optionTitle}
        {!isOpen ?
        (<Icon icon="fe:arrow-down" style={{color: "#63676E", alignSelf: "center", fontSize: "16px", }}/>):
        (<Icon icon="fe:arrow-up" style={{color: "#63676E", alignSelf: "center", fontSize: "16px", }}/>)
        }
      </DropDownButton>
        
      {isOpen && (
        <div style={{position: "relative"}}>
          <DropDownList style={{position: "absolute", top: "25px", right: "0", borderRadius: "20px" }}>
            {DropDownOptions.map((item, index)=>(
              <li style={{listStyle: "none"}} key={index}>
                <DropDownItem 
                  style={ selectedDropDown===item.optionName ? 
                    {
                      background: "#E0EAFF",
                      borderColor: "#E0EAFF",
                      color: "#074EE8"
                    } : {} 
                  }
                  onClick={() => handleClick(item.optionName)}
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

export default DropDownMenu;