const ethers = require("ethers");
const ForceInterface = require("../artifacts/contracts/Force.sol/Force.json");

require("dotenv").config()

RPC_URL = process.env.RPC_URL;
PRIV_KEY = process.env.PRIV_KEY;

const main = async () => {
  const provider = new ethers.providers.JsonRpcProvider(RPC_URL);
  const signer = new ethers.Wallet(PRIV_KEY, provider);

  const ForceFactory = new ethers.ContractFactory(ForceInterface.abi, ForceInterface.bytecode, signer);
  const ForceContract = await ForceFactory.deploy();
  await ForceContract.deployed();
  console.log(ForceContract);
  console.log("Deployed", ForceContract.address);
  const txn1 = await ForceContract.sendToTarget({from: signer.address, value: ethers.utils.parseEther("0.01")});

  console.log("TXN", txn1);
}


const run = async () => {
  try {
    await main();
    process.exit(0);
  } catch (err) {
    console.log("ERR", err);
    process.exit(1);
  }
}

run()
