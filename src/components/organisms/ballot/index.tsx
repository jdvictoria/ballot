import React from 'react';
import styled from "styled-components";

import {PositionLabel} from "../../molecules/position";

const BallotContainer = styled.div`
  justify-content: center;
  align-items: center;
  
  margin-left: 7.5px;
  
  width: 47.5%;
  height: 92.5%;
  
  background-color: white;

  border: 2px solid black;
`

export function Ballot() {
    return (
        <BallotContainer>
            <PositionLabel color={'#2071c1'} label={'PRESIDENT / Vote for 1'}/>
            <PositionLabel color={'#51b052'} label={'VICE PRESIDENT / Vote for 1'}/>
            <PositionLabel color={'#2071c1'} label={'SENATOR / Vote for 12'}/>
        </BallotContainer>
    )
}