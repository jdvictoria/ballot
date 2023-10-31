import React from 'react';
import styled from "styled-components";
import JsBarcode from "jsbarcode";

const SubmissionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 100%;
  height: 30%;
`

const TextSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  
  width: 75%;
`

const ImageSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  padding-right: 185px;
  
  width: 25%;
`

const StyledText = styled.text`
  text-align: center;
  
  padding-top: 2.5px;
  padding-bottom: 2.5px;
  padding-left: 40px;
  
  color: black;
  font-size: 18px;
`

const StyledSVG = styled.svg`
  width: 325px;
`

// @ts-ignore
export function FormOutput({hashString, hashedString}) {
    JsBarcode(".barcode").init();

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
            <ImageSection>
                <StyledSVG className="barcode"
                     jsbarcode-format="CODE128"
                     jsbarcode-value={hashedString}
                     jsbarcode-textmargin="0"
                     jsbarcode-fontoptions="bold">
                </StyledSVG>
            </ImageSection>
        </SubmissionContainer>
    )
}