import React from 'react';
import styled from "styled-components";

import {PositionLabel} from "../../molecules/position";
import {VoteComponent} from "../../molecules/radio";

import Presidents from '../../../data/presidents.json';
import VicePresidents from '../../../data/vicepresidents.json';
import Senators from '../../../data/senators.json';
import PartyList from '../../../data/partylist.json';

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
  height: 3.5%;

  border-top: 1px solid black;
  border-bottom: 1px solid black;
  border-left: 1px solid black;
  border-right: 1px solid black;
        
  background-color: #2071c1;      
`

export function Ballot() {
    return (
        <BallotContainer>
            <PositionLabel color={'#2071c1'} label={'PRESIDENT'}></PositionLabel>
            <VoteComponent type={'radio'} name={'p'} data={Presidents}/>
            <PositionLabel color={'#51b052'} label={'VICE PRESIDENT'}/>
            <VoteComponent type={'radio'} name={'p'} data={VicePresidents}/>
            <PositionLabel color={'#2071c1'} label={'SENATOR'}/>
            <VoteComponent type={'checkbox'} name={'p'} data={Senators}/>
            <PositionLabel color={'#51b052'} label={'PARTYLIST'}/>
            <VoteComponent type={'checkbox'} name={'p'} data={PartyList}/>
            <FillerLabel/>
        </BallotContainer>
    )
}