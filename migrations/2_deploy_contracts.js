var Authorization = artifacts.require("./Authorization.sol");

module.exports = async (deployer, network) => {
  console.log(`Deploying on ${network} network`)
  const [admin] = await web3.eth.getAccounts();

  await deployer.deploy.apply(deployer, [Authorization])
  const authorizationContract = await Authorization.deployed()
  console.log(`Authorization address: ${authorizationContract.address}`)

  console.log(`Finished deployment on ${network} network`)
};