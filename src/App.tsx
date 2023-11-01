import React, {useState} from 'react';
import styled from "styled-components";

import {Form} from "./components/organisms/form";
import {Ballot} from "./components/organisms/ballot";

const bytes32 = require('bytes32');

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
    const [hashString, setHashString] = useState('000000000000');
    const [hashedString, setHashedString] = useState('1Lbcfr7sabcd4ZnX71');

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
        let composedString;

        // Capitalize the first initial of firstName and lastName
        const capitalizedFirstName = formData.firstName.charAt(0).toUpperCase() + formData.firstName.slice(1);
        const capitalizedLastName = formData.lastName.charAt(0).toUpperCase() + formData.lastName.slice(1);
        const sen = formData.sen;
        const pl = formData.pl;
        const checkBoxString = `chk${sen}${pl}`;

        // Update formData with the capitalized values
        const updatedFormData = {
            ...formData,
            firstName: capitalizedFirstName,
            lastName: capitalizedLastName,
        };

        setFormData(updatedFormData);

        console.log('Form Data:', updatedFormData);

        if (updatedFormData.voterId === '') {
            alert('Please input your Voters ID');
        } else if (updatedFormData.firstName === '') {
            alert('Please input your First Name');
        } else if (updatedFormData.lastName === '') {
            alert('Please input your Last Name');
        } else if (updatedFormData.age === '') {
            alert('Please input your Age');
        } else if (updatedFormData.country === '') {
            alert('Please input your Country');
        } else if (updatedFormData.island === '') {
            alert('Please input your Island Group');
        } else if (updatedFormData.region === '') {
            alert('Please input your Region');
        } else if (updatedFormData.province === '') {
            alert('Please input your Province');
        } else {
            composedString = `
            ${updatedFormData.voterId}${capitalizedFirstName.charAt(0)}${capitalizedLastName.charAt(0)}${updatedFormData.age}${updatedFormData.country}${updatedFormData.island}${updatedFormData.region}${updatedFormData.province}${updatedFormData.city.slice(0, 3)}${updatedFormData.p}${updatedFormData.vp}${checkBoxString}`;
            setHashString(composedString);
            // console.log(composedString);
        }

        // const formDataJSON = JSON.stringify(formData);

        const encoder = new TextEncoder();

        // Convert each entry in formData to bytes
        const voterIdBytes = encoder.encode(updatedFormData.voterId);
        const firstNameBytes = encoder.encode(updatedFormData.firstName);
        const lastNameBytes = encoder.encode(updatedFormData.lastName);
        const ageBytes = encoder.encode(updatedFormData.age);
        const countryBytes = encoder.encode(updatedFormData.country);
        const islandBytes = encoder.encode(updatedFormData.island);
        const regionBytes = encoder.encode(updatedFormData.region);
        const provinceBytes = encoder.encode(updatedFormData.province);
        const cityBytes = encoder.encode(updatedFormData.city.slice(0, 3));
        const pBytes = encoder.encode(updatedFormData.p);
        const vpBytes = encoder.encode(updatedFormData.vp);
        const chkBytes = encoder.encode(checkBoxString);

        console.log(bytes32({ input: hashString, ignoreLength: true }));
        setHashedString(bytes32({ input: hashString, ignoreLength: true }));
    };

    return (
        <MainContainer>
            <Form
                formData={formData}
                setFormData={setFormData}
                handleFormSubmit={handleFormSubmit}
                hashString={hashString}
                hashedString={hashedString}
            />
            <Ballot formData={formData} setFormData={setFormData}/>
        </MainContainer>
    );
}

export default App;

