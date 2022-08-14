const ethers = require("ethers");
const DelegationInterface = require("../artifacts/contracts/Delegation.sol/Delegation.json");

require("dotenv").config()

const RPC_URL = process.env.RPC_URL;
const PRIV_KEY = process.env.PRIV_KEY;

const main = async() => {
  const provider = new ethers.providers.JsonRpcProvider(RPC_URL);
  const signer = new ethers.Wallet(PRIV_KEY, provider);

  const DelegationFactory = new ethers.ContractFactory(DelegationInterface.abi, DelegationInterface.bytecode, signer);
  const DelegationContract = await DelegationFactory.deploy();
  await DelegationContract.deployed();

  console.log(DelegationContract)
  console.log("Deployed", DelegationContract.address);
}

const run = async() => {
  try {
    await main();
    process.exit(0);
  } catch (err) { 
    console.log("ERR", err);
    process.exit(1);
  }
}

run()
