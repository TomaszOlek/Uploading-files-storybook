import styled from 'styled-components';

export function convertToMBorKB(bytes) {
  if (bytes < 1024) {
    return `${bytes} bytes`;
  } else if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(1)} KB`;
  } else {
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  }
}

export const Text = styled.p`
  font-style: ${props => props.style ?  props.style : "normal"};
  font-weight: ${props => props.weight ?  props.weight : 400};
  font-size: ${props => props.size ?  props.size : "16px"};
  line-height: ${props => props.height ?  props.height : "22px"};
  color: ${props => props.color ?  props.color : "#1E1D1D"};
  text-align: ${props => props.align ?  props.align : "left"};
  font-family: ${props => props.family ?  props.family : "'Open Sans', sans-serif"};
  margin : ${props => true && props.margin};
`