import React, {useState} from 'react';
import styled from "styled-components";

import {Form} from "./components/organisms/form";
import {Ballot} from "./components/organisms/ballot";

const MainContainer = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  
  margin: 20px 20px 20px 20px;
  
  background-color: white;

  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23333' stroke-width='25' stroke-dasharray='10%2c 15' stroke-dashoffset='60' stroke-linecap='butt'/%3e%3c/svg%3e");
`

function App() {
    const [formData, setFormData] = useState({
        voterId: '',
        firstName: '',
        lastName: '',
        age: '',
        country: '',
        island: '',
        region: '',
        province: '',
        city: '',
    });

    return (
      <MainContainer>
          <Form formData={formData} setFormData={setFormData}/>
          <Ballot/>
      </MainContainer>
  );
}

export default App;
