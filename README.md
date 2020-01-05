# Auth Contracts

## Description
Used for tracking users of the abstraction middleware

## To test
- ganache-cli
- truffle console --network development
- test

## Deployments
Ensure you have your mnemonic in the `.secret` file at the project src/

Copy your infura project id to the `truffle-config.js` file
 
## To deploy
- truffle console --network rinkeby
- migrate --reset

## To interact with smart contracts
- truffle console --network rinkeby
- migrate
- let instance = await Authorization.deployed()
- let accounts = await web3.eth.getAccounts()
- instance.subscribe({ from: accounts[0], value: 100000000000000000 })
- await web3.eth.getBalance(instance.address)
