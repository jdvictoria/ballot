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
        p: '',
        vp: '',
        sen: '',
        pl: '',
    });

    const handleFormSubmit = () => {
        // Capitalize the first initial of firstName and lastName
        const capitalizedFirstName = formData.firstName.charAt(0).toUpperCase() + formData.firstName.slice(1);
        const capitalizedLastName = formData.lastName.charAt(0).toUpperCase() + formData.lastName.slice(1);

        // Update formData with the capitalized values
        const updatedFormData = {
            ...formData,
            firstName: capitalizedFirstName,
            lastName: capitalizedLastName,
        };

        setFormData(updatedFormData);

        console.log('Form Data:', updatedFormData);

        const composedString = `${updatedFormData.voterId}${capitalizedFirstName.charAt(0)}${capitalizedLastName.charAt(0)}${updatedFormData.age}${updatedFormData.country}${updatedFormData.island}${updatedFormData.region}${updatedFormData.province}${updatedFormData.city.slice(0, 3)}${updatedFormData.p}${updatedFormData.vp}chk${updatedFormData.sen}${updatedFormData.pl}`;
        console.log('ID Data:', composedString);

        // You can convert the form data to JSON and store it as needed
        const formDataJSON = JSON.stringify(formData);
        // Store formDataJSON as needed (e.g., in state, send to an API, etc.)
    };

    return (
      <MainContainer>
          <Form formData={formData} setFormData={setFormData} handleFormSubmit={handleFormSubmit}/>
          <Ballot formData={formData} setFormData={setFormData}/>
      </MainContainer>
  );
}

export default App;
