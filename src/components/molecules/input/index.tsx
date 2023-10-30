import React, {useEffect, useState} from 'react';
import styled from "styled-components";

import RegionList from '../../../data/regions.json';
import ProvinceList from '../../../data/provinces.json';
import CitiesList from '../../../data/cities.json';

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  
  width: 100%;
  height: 40%;
  
  background-color: yellow;
`

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
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
        noneOption.value = "none";
        noneOption.text = "None";
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


    return (
        <InputContainer>
            <StyledForm>
                <label>
                    Voter's ID
                </label>
                <input type="number"/>
                <label>
                    First Name
                </label>
                <input type="text"/>
                <label>
                    Last Name
                </label>
                <input type="text"/>
            </StyledForm>
            <StyledForm>
                <label>
                    Country
                </label>
                <select id="country" name="country">
                    <option value="na">None</option>
                    <option value="local">Philippines</option>
                    <option value="domestic">Outside Philippines</option>
                </select>
                <label>
                    Island Group
                </label>
                <select id="island" name="island" onChange={handleIslandChange}>
                    <option value="na">None</option>
                    <option value="luzon">Luzon</option>
                    <option value="visayas">Visayas</option>
                    <option value="mindanao">Mindanao</option>
                </select>
                <label>
                    Region
                </label>
                <select id="region" name="region" onChange={handleRegionChange}>
                    <option value="na">None</option>
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
                </select>
            </StyledForm>
            <StyledForm>
                <label>
                    Province
                </label>
                <select id="province" name="province" onChange={handleProvinceChange}>
                    <option value="na">None</option>
                    {ProvinceList
                        .filter(province => province.region === selectedRegion)
                        .map(province => (
                            <option key={province.key} value={province.key}>
                                {province.name}
                            </option>
                        ))}
                </select>
                <label>
                    City
                </label>
                <select id="city" name="city">
                    <option value="na">None</option>
                </select>
            </StyledForm>
        </InputContainer>
    )
}