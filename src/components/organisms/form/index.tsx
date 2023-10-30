import React from 'react';
import styled from "styled-components";

import {FormHeader} from "../../molecules/header";
import {FormInput} from '../../molecules/input';
import {FormSubmit} from '../../molecules/submit';

const FormContainer = styled.div`
  justify-content: center;
  align-items: center;
  flex-direction: row;

  margin-right: 7.5px;
  
  width: 47.5%;
  height: 92.5%;
`

export function Form() {
    return (
        <FormContainer>
            <FormHeader/>
            <FormInput/>
            <FormSubmit/>
        </FormContainer>
    )
}