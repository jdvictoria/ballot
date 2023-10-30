import React, {useState} from 'react';
import styled from "styled-components";

import RegionList from '../../../data/regions.json';
import ProvinceList from '../../../data/provinces.json';

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
    const [selectedIsland, setSelectedIsland] = useState('luzon'); // Default to Luzon
    const [selectedRegion, setSelectedRegion] = useState('NCR');

    const handleIslandChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setSelectedIsland(event.target.value);
        setSelectedRegion(''); // Reset selected region when the island changes
    };

    const handleRegionChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setSelectedRegion(event.target.value);
    };


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
                    <option value="local">Philippines</option>
                    <option value="domestic">Outside Philippines</option>
                </select>
                <label>
                    Island Group
                </label>
                <select id="island" name="island" onChange={handleIslandChange}>
                    <option value="luzon">Luzon</option>
                    <option value="visayas">Visayas</option>
                    <option value="mindanao">Mindanao</option>
                </select>
                <label>
                    Region
                </label>
                <select id="region" name="region" onChange={handleRegionChange}>
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
                <select id="province" name="province">
                    {ProvinceList
                        .filter(province => province.region === selectedRegion)
                        .map(province => (
                            <option key={province.key} value={province.key}>
                                {province.name}
                            </option>
                        ))}
                </select>
            </StyledForm>
        </InputContainer>
    )
}