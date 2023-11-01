import React from 'react';
import styled from "styled-components";

import {FormHeader} from "../../molecules/header";
import {FormInput} from '../../molecules/input';
import {FormOutput} from '../../molecules/submit';

const FormContainer = styled.div`
  justify-content: center;
  align-items: center;
  flex-direction: row;

  margin-right: 7.5px;
  
  width: 47.5%;
  height: 92.5%;
  
  border: 2px solid black;
`

// @ts-ignore
export function Form({formData, setFormData, handleFormSubmit, hashString, hashedString}) {
    return (
        <FormContainer>
            <FormHeader/>
            <FormInput formData={formData} setFormData={setFormData} handleFormSubmit={handleFormSubmit}/>
            <FormOutput hashString={hashString} hashedString={hashedString}/>
        </FormContainer>
    )
}