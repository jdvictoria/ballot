import React, {useState} from 'react';
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
  
  background-color: white;
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
export function VoteComponent({ type, name, data, maxSelection, formData, setFormData }) {
    const itemsPerRow = 4;
    const rows = [];
    for (let i = 0; i < data.length; i += itemsPerRow) {
        const row = data.slice(i, i + itemsPerRow);
        rows.push(row);
    }

    const [selectedItemKey, setSelectedItemKey] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);

    const handleItemSelect = (item: { key: any; name?: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactPortal | Iterable<React.ReactNode> | null | undefined; }) => {
        // Handle item selection for 'checkbox' type
        if (type === 'checkbox') {
            // @ts-ignore
            if (selectedItems.includes(item)) {
                // Deselect the item
                setSelectedItems(selectedItems.filter((selectedItem) => selectedItem !== item));
            } else {
                // Check if the maximum selection limit is reached
                if (selectedItems.length >= maxSelection) {
                    alert(`You can only select a maximum of ${maxSelection} items.`);
                } else {
                    // Select the item
                    // @ts-ignore
                    setSelectedItems([...selectedItems, item]);
                }
            }

            // Update the formData based on the selectedItems
            const fieldName = name === 'sen' ? 'sen' : 'pl';
            setFormData({
                ...formData,
                [fieldName]: selectedItems.length, // Update 'sen' or 'pl' in formData
            });
        }

        // Handle item selection for 'radio' type
        if (type === 'radio') {
            const fieldName = name === 'p' ? 'p' : 'vp';
            setSelectedItemKey(item.key);
            setFormData({
                ...formData,
                [fieldName]: item.key, // Update 'p' or 'vp' in formData
            });
        }
    };

    return (
        <div>
            {rows.map((row, rowIndex) => (
                <StyledHolder key={rowIndex}>
                    {row.map((item: { key: never[]; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }, itemIndex: React.Key | null | undefined) => (
                        <StyledPlate key={itemIndex}>
                            <StyledInput
                                type={type}
                                name={name}
                                // @ts-ignore
                                checked={(type === 'radio' && item.key === selectedItemKey) || (type === 'checkbox' && selectedItems.includes(item))}
                                onChange={() => handleItemSelect(item)}
                            />
                            <StyledText>{item.name}</StyledText>
                        </StyledPlate>
                    ))}
                </StyledHolder>
            ))}
        </div>
    );
}