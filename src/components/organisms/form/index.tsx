import React from 'react';
import styled from "styled-components";

import {FormHeader} from "../../molecules/header";

const FormContainer = styled.div`
  justify-content: center;
  align-items: center;
  flex-direction: row;

  margin-right: 7.5px;
  
  width: 47.5%;
  height: 92.5%;
`

const InputContainer = styled.div`
  justify-content: center;
  align-items: center;
  
  width: 100%;
  height: 40%;
  
  background-color: yellow;
`

const SubmissionContainer = styled.div`
  justify-content: center;
  align-items: center;
  
  width: 100%;
  height: 40%;
  
  background-color: blue;
`

export function Form() {
    return (
        <FormContainer>
            <FormHeader/>
            <InputContainer>

            </InputContainer>
            <SubmissionContainer>

            </SubmissionContainer>
        </FormContainer>
    )
}