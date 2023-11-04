import React from 'react';
import styled from "styled-components";

import { MetaMaskButton } from "@metamask/sdk-react-ui";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 100%;
  height: 20%;
`

const TextSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  
  padding-left: 25px;
  
  width: 75%;
`

const StyledText = styled.text`
  text-align: center;
  
  padding-top: 2.5px;
  padding-bottom: 2.5px;
  
  color: black;
  font-size: 18px;
`

const GridColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 50%;
`

export function FormHeader() {
    return (
        <HeaderContainer>
            <TextSection>
                <StyledText style={{fontWeight: "bold"}}>
                    NOVEMBER 3, 2023 NATIONAL ELECTIONS
                </StyledText>
                <StyledText>
                    PHILIPPINES, ASIA PACIFIC
                </StyledText>
                <StyledText>
                    Type: National Election
                </StyledText>
            </TextSection>
            <GridColumn>
                <StyledText>
                    Connection Status:
                </StyledText>
                <MetaMaskButton theme={"light"} color="white"></MetaMaskButton>
            </GridColumn>
        </HeaderContainer>
    )
}