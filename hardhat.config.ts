import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require('dotenv').config();

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  /*
  networks: {
    rinkeby: {
      url: process.env.RPC_URL,
      accounts: [process.env.PRIV_KEY],
      gas: 2100000,
      gasPrice: 8000000000,
    },
  },
  */
};

export default config;
