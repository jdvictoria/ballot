import React from 'react';
import styled from "styled-components";

const StyledHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  
  width: 100%;
  height: 7.5%;
`

const StyledPlate = styled.div`
  justify-content: center;
  align-items: center;

  width: 25%;
  height: 100%;

  border-top: 1px solid black;
  border-bottom: 1px solid black;
  border-left: 1px solid black;
  border-right: 1px solid black;
`

export function NamePlaceholder() {
    return (
        <StyledHolder>
            <StyledPlate></StyledPlate>
            <StyledPlate></StyledPlate>
            <StyledPlate></StyledPlate>
            <StyledPlate></StyledPlate>
        </StyledHolder>
    )
}