// scripts/index.js
// import Web3 from "web3";
const Web3 = require("web3");
const web3 = new Web3();
const Box = artifacts.require("Box");


web3.setProvider(new Web3.providers.HttpProvider('http://localhost:8545'));
module.exports = async function main (callback) {
    try {
        const accounts = await web3.eth.getAccounts();
        console.log(accounts);
        const box = await Box.deployed();
        const store = await box.store(42)
        const value1 = await box.retrieve();
        console.log('Box value is : ', value1.toString());
        await box.store(23)
        const value = await box.retrieve();
        console.log('now Box value is : ', value.toString());
        callback(0);
    } catch (error) {
        console.error(error);
        callback(1);
    }
};