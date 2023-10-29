import React from 'react';
import styled from "styled-components";

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

        </BallotContainer>
    )
}