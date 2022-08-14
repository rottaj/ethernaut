const FallBackInterface = require("../interfaces/FallBackInterface.js");
const ethers = require('ethers');
require('dotenv').config()

RPC_URL = process.env.RPC_URL;
PRIV_KEY = process.env.PRIV_KEY;

const instanceAddress = "0x0b89E569D49dc196e23EF2a89996Fe206116B149";

const main = async() => {
  console.log(process.env)
  const abi = FallBackInterface.abi;
  const provider = new ethers.providers.JsonRpcProvider(RPC_URL);
  const signer = new ethers.Wallet(PRIV_KEY, provider);
  
  const attackContract = new ethers.Contract(instanceAddress, abi, signer);
  console.log(signer);
  console.log(attackContract);
  const ExploitContractFactory = await hre.ethers.getContractFactory("fallBack.sol");
  const ExploitContract = await ExploitContractFactory.deploy();
  await ExploitContract.deployed();
  console.log("DEPLOYED", ExploitContract.address);
}

const run = async() => {
  try {
    await main();
    process.exit(0);
  } catch(err) {
    console.log("ERR", err);
    process.exit(1);
  }
}

run()
