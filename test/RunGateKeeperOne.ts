const { ethers } = require("ethers");
const GateKeeperLevelInterface = 
  require("..artifacts/contracts/GateKeeperOne.sol/GateKeeperOne.json");
const GateKeeperExploitInterface = 
  require("..artifacts/contracts/GateKeeperOneExploit.sol/GateKeeperOneExploit.json");


const main = async() => {
  //const provider = new ethers.provider.JsonRpcProvider(RPC_URL);
  const GateKeeperLevelFactory = ethers.ContractFactory(
    GateKeeperLevelInterface.abi, 
    GateKeeprLevelInterface.bytecode
  );
  const GateKeeperExploitFactory = ethers.ContractFactory(
    GateKeeperExploitInterface.abi, 
    GateKeeprExploitInterface.bytecode
  );

  GateKeeperlevelContract = await GateKeeperLevelFactory.deploy();
  await GateKeeperLevelContract.deployed();

  GateKeeperExploitContract = await GateKeeperExploitFactory.deploy();
  await GateKeeperExploitContract.deployed();
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
