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

export function FormInput() {
    const [selectedIsland, setSelectedIsland] = useState(''); // Default to Luzon
    const [selectedRegion, setSelectedRegion] = useState('');
    const [selectedProvince, setSelectedProvince] = useState('');

    const handleIslandChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setSelectedIsland(event.target.value);
        setSelectedRegion('');
        setSelectedProvince('');
    };

    const handleRegionChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setSelectedRegion(event.target.value);
        setSelectedProvince('');
    };

    const handleProvinceChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setSelectedProvince(event.target.value);
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
                    <StyledInput type="number"/>
                    <StyledLabel>
                        First Name
                    </StyledLabel>
                    <StyledInput type="text"/>
                    <StyledLabel>
                        Last Name
                    </StyledLabel>
                    <StyledInput type="text"/>
                </StyledForm>
                <StyledForm>
                    <StyledLabel>
                        Age
                    </StyledLabel>
                    <StyledSelect id="age" name="age">
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
                    <StyledSelect id="country" name="country">
                        <option value="na">Select Country</option>
                        <option value="local">Philippines</option>
                        <option value="domestic">Outside Philippines</option>
                    </StyledSelect>
                    <StyledLabel>
                        Island Group
                    </StyledLabel>
                    <StyledSelect id="island" name="island" onChange={handleIslandChange}>
                        <option value="na">Select Group</option>
                        <option value="luzon">Luzon</option>
                        <option value="visayas">Visayas</option>
                        <option value="mindanao">Mindanao</option>
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
                                if (selectedIsland === 'luzon') {
                                    return ['NCR', 'CAR', 'I', 'II', 'III', 'IV-A', 'IV-B', 'V'].includes(region.key);
                                } else if (selectedIsland === 'visayas') {
                                    return ['VI', 'VII', 'VIII'].includes(region.key);
                                } else {
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
                    <StyledSelect id="city" name="city">
                        <option value="na">Select City</option>
                    </StyledSelect>
                </StyledForm>
            </InputContainer>
            {/* Implement the button here */}
        </StyledDiv>
    )
}