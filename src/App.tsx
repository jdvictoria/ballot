import React, {useEffect, useState} from 'react';
import styled from "styled-components";

import {Form} from "./components/organisms/form";
import {Ballot} from "./components/organisms/ballot";

const Web3 = require('web3');
const ethereumButton = document.querySelector('.enableEthereumButton');
const showAccount = document.querySelector('.showAccount');

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

async function getFromAccount() {
    // Fetch Accounts
    // @ts-ignore
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
        .catch((err) => {
            if (err.code === 4001) {
                // EIP-1193 userRejectedRequest error
                // If this happens, the user rejected the connection request.
                console.log('Please connect to MetaMask.');
            } else {
                console.error(err);
            }
        });
    // @ts-ignore
    return accounts[0];
}

// @ts-ignore
async function getToAccount(region) {
    // Fetch Accounts
    // @ts-ignore
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
        .catch((err) => {
            if (err.code === 4001) {
                console.log('Please connect to MetaMask.');
            } else {
                console.error(err);
            }
        });
    // Choose Specific Account
    let account;

    if (region === 'NCR') {
        // @ts-ignore
        account = accounts[15];
    } else if (region === 'CAR') {
        // @ts-ignore
        account = accounts[16];
    } else if (region === 'I') {
        // @ts-ignore
        account = accounts[1];
    } else if (region === 'II') {
        // @ts-ignore
        account = accounts[2];
    } else if (region === 'III') {
        // @ts-ignore
        account = accounts[3];
    } else if (region === 'IV-A') {
        // @ts-ignore
        account = accounts[4];
    } else if (region === 'IV-B') {
        // @ts-ignore
        account = accounts[5];
    } else if (region === 'V') {
        // @ts-ignore
        account = accounts[6];
    } else if (region === 'VI') {
        // @ts-ignore
        account = accounts[7];
    } else if (region === 'VII') {
        // @ts-ignore
        account = accounts[8];
    } else if (region === 'VIII') {
        // @ts-ignore
        account = accounts[9];
    } else if (region === 'IX') {
        // @ts-ignore
        account = accounts[10];
    } else if (region === 'X') {
        // @ts-ignore
        account = accounts[11];
    } else if (region === 'XI') {
        // @ts-ignore
        account = accounts[12];
    } else if (region === 'XII') {
        // @ts-ignore
        account = accounts[13];
    } else if (region === 'XIII') {
        // @ts-ignore
        account = accounts[14];
    } else if (region === 'ARMM') {
        // @ts-ignore
        account = accounts[17];
    }
    return account;
}

// @ts-ignore
async function setTransaction(fromAccount, toAccount) {
    // @ts-ignore
    const transaction = await window.ethereum.request({
            method: 'eth_sendTransaction',
            params: [
                {
                    from: fromAccount,
                    to: toAccount,
                    value: 0.05,
                    gasLimit: '0x5028',
                    maxPriorityFeePerGas: '0x3b9aca00',
                    maxFeePerGas: '0x2540be400',
                },
            ],
        })
        .then((txHash) => {
            console.log('Transaction Hash:', txHash);
            // You can handle the transaction hash here or update your state accordingly.
        })
        .catch((error) => console.error('Transaction Error:', error));
}

function App() {
    const [submitted, setSubmitted] = useState(false);
    const [hashString, setHashString] = useState('');
    const [hashedString, setHashedString] = useState('N/A');

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

    useEffect(() => {
        if (submitted) {
            setHashedString(Web3.utils.soliditySha3(hashString));
        }
        setSubmitted(false);
    }, [submitted]);

    const handleFormSubmit = () => {
        let composedString;

        const capitalizedFirstName = formData.firstName.charAt(0).toUpperCase() + formData.firstName.slice(1);
        const capitalizedLastName = formData.lastName.charAt(0).toUpperCase() + formData.lastName.slice(1);
        const sen = formData.sen;
        const pl = formData.pl;
        const checkBoxString = `chk${sen}${pl}`;

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
            setSubmitted(true);

            // Metamask Backend
            // @ts-ignore
            const fromAccount = getFromAccount();
            // @ts-ignore
            const toAccount = getToAccount(updatedFormData.region);
            const sendTransaction = setTransaction(fromAccount, toAccount);
        }
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

