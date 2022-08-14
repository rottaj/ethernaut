const TelephoneInterface = require("../artifacts/contracts/Telephone.sol/Telephone.json");
const ethers = require("ethers");

require('dotenv').config();

RPC_URL = process.env.RPC_URL;
PRIV_KEY = process.env.PRIV_KEY;

const main = async() => {
  const provider = new ethers.providers.JsonRpcProvider(RPC_URL);
  const signer = new ethers.Wallet(PRIV_KEY, provider);
  const TelephoneFactory = new ethers.ContractFactory(TelephoneInterface.abi, TelephoneInterface.bytecode, signer);
  const TelephoneContract = await TelephoneFactory.deploy();
  await TelephoneContract.deployed();
  console.log(TelephoneContract);
  console.log("Deployed", TelephoneContract.address);
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

run();
