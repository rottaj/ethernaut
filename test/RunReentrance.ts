const { ethers } = require("ethers");
const ReentranceInterface = require("../artifacts/contracts/Reentrance.sol/Reentrance.json");

require("dotenv").config();

const PRIV_KEY = process.env.PRIV_KEY;
const RPC_URL = process.env.RPC_URL;

const main = async() => {
  const provider = new ethers.providers.JsonRpcProvider(RPC_URL);
  const signer = new ethers.Wallet(PRIV_KEY, provider);

  const ReentranceFactory = new ethers.ContractFactory(ReentranceInterface.abi, ReentranceInterface.bytecode, signer);
  const ReentranceContract = await ReentranceFactory.deploy();
  await ReentranceContract.deployed();
  console.log(ReentranceContract);
  console.log("Deployed", ReentranceContract);
  const txn = await ReentranceContract.attack();
  console.log(txn)
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
