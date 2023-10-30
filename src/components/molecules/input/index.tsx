import React, {useEffect, useState} from 'react';
import styled from "styled-components";

import RegionList from '../../../data/regions.json';
import ProvinceList from '../../../data/provinces.json';
import CitiesList from '../../../data/cities.json';

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  width: 97.5%;
  height: 50%;

  margin-left: 7.5px;
  margin-right: 7.5px;

  border: 2px solid black;
  border-radius: 10px;
`

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  
  width: 100%;
  
  margin-top: 10px;
  margin-bottom: 10px;
`

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  
  padding-left: 25px;
  padding-right: 25px;
`

const StyledText = styled.text`
  text-align: center;
  
  padding-top: 2.5px;
  padding-bottom: 2.5px;
  
  color: black;
  font-size: 18px;
  font-weight: bold;
`

const StyledLabel = styled.label`
  margin-bottom: 5px;
`

const StyledInput = styled.input`
  width: 150px;
  height: 30px;
  
  font-size: 16px;
  
  margin-bottom: 10px;
`

const StyledSelect = styled.select`
  width: 150px;
  height: 30px;

  font-size: 16px;
  
  margin-bottom: 10px;
`

const StyledButton = styled.button`
  width: 150px;
  height: 30px;
`

// @ts-ignore
export function FormInput({formData, setFormData}) {
    const [selectedIsland, setSelectedIsland] = useState('b1'); // Default to Luzon
    const [selectedRegion, setSelectedRegion] = useState('');
    const [selectedProvince, setSelectedProvince] = useState('');

    const handleIslandChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        // @ts-ignore
        setFormData({ ...formData, island: event.target.value })
        setSelectedIsland(event.target.value);
        setSelectedRegion('');
        setSelectedProvince('');
    };

    const handleRegionChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        // @ts-ignore
        setFormData({ ...formData, region: event.target.value })
        setSelectedRegion(event.target.value);
        setSelectedProvince('');
    };

    const handleProvinceChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        // @ts-ignore
        setFormData({ ...formData, province: event.target.value })
        setSelectedProvince(event.target.value);
    };

    const handleFormSubmit = () => {
        // You can access the form data from the formData state
        console.log('Form Data:', formData);
        const composedString = `${formData.age}${formData.firstName.charAt(0)}${formData.lastName.charAt(0)}${formData.country}${formData.island}${formData.region}${formData.province}${formData.city.slice(0, 3)}`;
        console.log('ID Data:', composedString);

        // You can convert the form data to JSON and store it as needed
        const formDataJSON = JSON.stringify(formData);
        // Store formDataJSON as needed (e.g., in state, send to an API, etc.)
    };

    useEffect(() => {
        // When the selectedProvince changes, filter the cities based on the selectedProvince
        const filteredCities = CitiesList.filter(city => city.province === selectedProvince && city.city);

        // Update the City dropdown with the filtered cities
        const cityDropdown = document.getElementById("city");
        // @ts-ignore
        cityDropdown.innerHTML = ""; // Clear existing options

        // Add an initial "None" option
        const noneOption = document.createElement("option");
        noneOption.value = "na";
        noneOption.text = "Select City";
        // @ts-ignore
        cityDropdown.appendChild(noneOption);

        filteredCities.forEach(city => {
            const option = document.createElement("option");
            option.value = city.name;
            option.text = city.name;
            // @ts-ignore
            cityDropdown.appendChild(option);
        });
    }, [selectedProvince]);

    const ageOptions = Array.from({ length: 83 }, (_, index) => ({
        value: 18 + index,
        label: (18 + index).toString(),
    }));

    return (
        <StyledDiv>
            <StyledText>Voter Identification Sheet</StyledText>
            <InputContainer>
                <StyledForm>
                    <StyledLabel>
                        Voter's ID
                    </StyledLabel>
                    <StyledInput type="number" onChange={(e) => setFormData({ ...formData, voterId: e.target.value })} />
                    <StyledLabel>
                        First Name
                    </StyledLabel>
                    <StyledInput type="text" onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} />
                    <StyledLabel>
                        Last Name
                    </StyledLabel>
                    <StyledInput type="text" onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} />
                </StyledForm>
                <StyledForm>
                    <StyledLabel>
                        Age
                    </StyledLabel>
                    <StyledSelect
                        id="age"
                        name="age"
                        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    >
                        <option value="">Select Age</option>
                        {ageOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </StyledSelect>
                    <StyledLabel>
                        Country
                    </StyledLabel>
                    <StyledSelect
                        id="country"
                        name="country"
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    >
                        <option value="na">Select Country</option>
                        <option value="a0">Philippines</option>
                        <option value="a1">Outside Philippines</option>
                    </StyledSelect>
                    <StyledLabel>
                        Island Group
                    </StyledLabel>
                    <StyledSelect id="island" name="island" onChange={handleIslandChange}>
                        <option value="na">Select Group</option>
                        <option value="b1">Luzon</option>
                        <option value="b2">Visayas</option>
                        <option value="b3">Mindanao</option>
                    </StyledSelect>
                </StyledForm>
                <StyledForm>
                    <StyledLabel>
                        Region
                    </StyledLabel>
                    <StyledSelect id="region" name="region" onChange={handleRegionChange}>
                        <option value="na">Select Region</option>
                        {RegionList
                            .filter(region => {
                                if (selectedIsland === 'b1') {
                                    return ['NCR', 'CAR', 'I', 'II', 'III', 'IV-A', 'IV-B', 'V'].includes(region.key);
                                } else if (selectedIsland === 'b2') {
                                    return ['VI', 'VII', 'VIII'].includes(region.key);
                                } else if (selectedIsland === 'b3') {
                                    return ['IX', 'X', 'XI', 'XII', 'XIII', 'ARMM'].includes(region.key);
                                }
                            })
                            .map(region => (
                                <option key={region.key} value={region.key}>
                                    {region.name}
                                </option>
                            ))}
                    </StyledSelect>
                    <StyledLabel>
                        Province
                    </StyledLabel>
                    <StyledSelect id="province" name="province" onChange={handleProvinceChange}>
                        <option value="na">Select Province</option>
                        {ProvinceList
                            .filter(province => province.region === selectedRegion)
                            .map(province => (
                                <option key={province.key} value={province.key}>
                                    {province.name}
                                </option>
                            ))}
                    </StyledSelect>
                    <StyledLabel>
                        City
                    </StyledLabel>
                    <StyledSelect
                        id="city"
                        name="city"
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })} // Handle the City dropdown's change event
                    >
                        <option value="na">Select City</option>
                    </StyledSelect>
                </StyledForm>
            </InputContainer>
            <StyledButton onClick={handleFormSubmit}>Submit Form</StyledButton>
        </StyledDiv>
    )
}