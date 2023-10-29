import React from 'react';
import styled from "styled-components";

const StyledLabel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 100%;
  height: 7.5%;

  border-bottom: 2px solid black;
`

const StyledText = styled.text`
  text-align: center;
  
  color: white;
  font-size: 16px;
`

// @ts-ignore
export function PositionLabel({color, label}) {
    return (
        <StyledLabel style={{backgroundColor: color}}>
            <StyledText>{label}</StyledText>
        </StyledLabel>
    )
}