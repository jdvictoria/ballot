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
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;

  width: 25%;
  height: 100%;

  border-top: 1px solid black;
  border-bottom: 1px solid black;
  border-left: 1px solid black;
  border-right: 1px solid black;
`

const StyledInput = styled.input`
  margin-left: 10px;
`

const StyledText = styled.text`
  text-align: center;

  margin-top: 3px;
  margin-left: 2.5px;
  
  color: black;
  font-size: 14px;
`

// @ts-ignore
export function VoteComponent({type, name, data}) {
    return (
        <StyledHolder>
            <StyledPlate>
                <StyledInput type={type} name={name} />
                <StyledText>{data[0].name}</StyledText>
            </StyledPlate>
            <StyledPlate>
                <StyledInput type={type} name={name} />
                <StyledText>{data[1].name}</StyledText>
            </StyledPlate>
            <StyledPlate>
                <StyledInput type={type} name={name} />
                <StyledText>{data[2].name}</StyledText>
            </StyledPlate>
            <StyledPlate>
                <StyledInput type={type} name={name} />
                <StyledText>{data[3].name}</StyledText>
            </StyledPlate>
        </StyledHolder>
    )
}