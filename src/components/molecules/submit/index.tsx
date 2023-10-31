import React from 'react';
import styled from "styled-components";
import JsBarcode from "jsbarcode";

const SubmissionContainer = styled.div`
  justify-content: center;
  align-items: center;
  
  width: 100%;
  height: 30%;
`

export function FormOutput() {
    JsBarcode("#barcode", "Hi!",{
        displayValue: false
    });

    return (
        <SubmissionContainer>
            <img id="barcode"/>
        </SubmissionContainer>
    )
}