const { ethers } = require("ethers");
const ElevatorInterface = require("../artifacts/contracts/Elevator.sol/Elevator.json");

require("dotenv").config()

const PRIV_KEY = process.env.PRIV_KEY;
const RPC_URL = process.env.RPC_URL;

const main = async() => {
  const provider = new ethers.providers.JsonRpcProvider(RPC_URL);
  const signer = new ethers.Wallet(PRIV_KEY, provider);

  const ElevatorFactory = new ethers.ContractFactory(ElevatorInterface.abi, ElevatorInterface.bytecode, signer);
  const ElevatorContract = await ElevatorFactory.deploy();
  await ElevatorContract.deployed();
  console.log(ElevatorContract);
  console.log("Deployed", ElevatorContract.address);

}

const run = async() => {
  try {
    await main();
    process.exit(0);
  } catch ( err ) { 
    console.log("ERR", err);
    process.exit(1);
  }
}

run();
