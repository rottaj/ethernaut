const ethers = require("ethers");
const TokenInterface = require("../artifacts/contracts/Token.sol/Token.json");

require('dotenv').config();

RPC_URL = process.env.RPC_URL;
PRIV_KEY = process.env.PRIV_KEY;

const main = async() => {
  const provider = new ethers.providers.JsonRpcProvider(RPC_URL);
  const signer = new ethers.Wallet(PRIV_KEY, provider);
    
  const TokenFactory = new ethers.ContractFactory(TokenInterface.abi, TokenInterface.bytecode, signer);
  const TokenContract = await TokenFactory.deploy();
  await TokenContract.deployed();
  console.log(TokenContract);
  console.log("DEPLOYED", TokenContract.address);
}

const run = async() => {
  try {
    await main();
    process.exit(0);
  } catch(err) {
    console.log("ERR", err);
    process.exit(1)
  }
}

run()
