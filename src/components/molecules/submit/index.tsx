import React from 'react';
import styled from "styled-components";

import { MetaMaskButton } from "@metamask/sdk-react-ui";

const SubmissionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  width: 100%;
  height: 30%;
`

const TextSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  width: 100%;
`

const MetamaskSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  
  width: 100%;
`

const GridColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
`

const StyledText = styled.text`
  text-align: center;
  
  padding-bottom: 5px;
  
  color: black;
  font-size: 17px;
`

// @ts-ignore
export function FormOutput({hashString, hashedString, statusString, transactionString}) {
    return (
        <SubmissionContainer>
            <TextSection>
                <StyledText>
                    Hash String:
                </StyledText>
                <StyledText style={{fontWeight: "bold"}}>
                    {!hashString ? 'N/A' : hashString}
                </StyledText>
                <StyledText>
                    abiEncoded String:
                </StyledText>
                <StyledText style={{fontWeight: "bold"}}>
                    {!hashedString ? 'N/A' : hashedString}
                </StyledText>
            </TextSection>
            <MetamaskSection>
                <GridColumn>
                    <StyledText>
                        Transaction Hash:
                    </StyledText>
                    <StyledText style={{fontWeight: "bold"}}>
                        {!transactionString ? 'N/A' : transactionString}
                    </StyledText>
                </GridColumn>
            </MetamaskSection>
        </SubmissionContainer>
    )
}