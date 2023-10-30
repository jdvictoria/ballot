import React from 'react';
import styled from "styled-components";

const StyledHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  
  width: 100%;
  height: 7.5%;
`

const StyledPlate = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;

  width: 25%;
  height: 100%;

  border-top: 1px solid black;
  border-bottom: 1px solid black;
  border-left: 1px solid black;
  border-right: 1px solid black;
`

const StyledInput = styled.input`
  margin-left: 10px;
`

const StyledText = styled.text`
  text-align: center;

  margin-top: 3px;
  margin-left: 2.5px;
  
  padding-top: 10px;
  padding-bottom: 10px;
  
  color: black;
  font-size: 14px;
`

// @ts-ignore
export function VoteComponent({type, name, data}) {
    const itemsPerRow = 4;

    // Create an array of rows based on the number of items per row
    const rows = [];
    for (let i = 0; i < data.length; i += itemsPerRow) {
        const row = data.slice(i, i + itemsPerRow);
        rows.push(row);
    }

    return (
        <div>
            {rows.map((row, rowIndex) => (
                <StyledHolder key={rowIndex}>
                    {row.map((item: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }, itemIndex: React.Key | null | undefined) => (
                        <StyledPlate key={itemIndex}>
                            <StyledInput type={type} name={name} />
                            <StyledText>{item.name}</StyledText>
                        </StyledPlate>
                    ))}
                </StyledHolder>
            ))}
        </div>
    )
}