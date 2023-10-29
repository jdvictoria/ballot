import React from 'react';
import styled from "styled-components";

import {PositionLabel} from "../../molecules/position";
import {NamePlaceholder} from "../../molecules/name";

const BallotContainer = styled.div`
  justify-content: center;
  align-items: center;
  
  margin-left: 7.5px;
  
  width: 47.5%;
  height: 92.5%;

  border-top: 1px solid black;
  border-bottom: 1px solid black;
  border-left: 1px solid black;
  border-right: 1px solid black;
  
  background-color: white;
`

const FillerLabel = styled.div`
  justify-content: center;
  align-items: center;
  
  width: 100%;
  height: 2.5%;

  border-top: 1px solid black;
  border-bottom: 1px solid black;
  border-left: 1px solid black;
  border-right: 1px solid black;
        
  background-color: #2071c1;      
`

export function Ballot() {
    return (
        <BallotContainer>
            <PositionLabel color={'#2071c1'} label={'PRESIDENT / Vote for 1'}/>
            <NamePlaceholder/>
            <NamePlaceholder/>
            <PositionLabel color={'#51b052'} label={'VICE PRESIDENT / Vote for 1'}/>
            <NamePlaceholder/>
            <NamePlaceholder/>
            <PositionLabel color={'#2071c1'} label={'SENATOR / Vote for 12'}/>
            <NamePlaceholder/>
            <NamePlaceholder/>
            <NamePlaceholder/>
            <NamePlaceholder/>
            <PositionLabel color={'#51b052'} label={'PARTYLIST / Vote for 2'}/>
            <NamePlaceholder/>
            <FillerLabel/>
        </BallotContainer>
    )
}