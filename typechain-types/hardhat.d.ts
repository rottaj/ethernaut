/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "CoinFlip",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CoinFlip__factory>;
    getContractFactory(
      name: "ICoinFlip",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ICoinFlip__factory>;
    getContractFactory(
      name: "Delegation",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Delegation__factory>;
    getContractFactory(
      name: "IDelegation",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IDelegation__factory>;
    getContractFactory(
      name: "Building",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Building__factory>;
    getContractFactory(
      name: "IBuilding",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IBuilding__factory>;
    getContractFactory(
      name: "IElevator",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IElevator__factory>;
    getContractFactory(
      name: "Force",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Force__factory>;
    getContractFactory(
      name: "IReentrance",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IReentrance__factory>;
    getContractFactory(
      name: "Reentrance",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Reentrance__factory>;
    getContractFactory(
      name: "ITelephone",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ITelephone__factory>;
    getContractFactory(
      name: "Telephone",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Telephone__factory>;
    getContractFactory(
      name: "IToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IToken__factory>;
    getContractFactory(
      name: "Token",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Token__factory>;

    getContractAt(
      name: "CoinFlip",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CoinFlip>;
    getContractAt(
      name: "ICoinFlip",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ICoinFlip>;
    getContractAt(
      name: "Delegation",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Delegation>;
    getContractAt(
      name: "IDelegation",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IDelegation>;
    getContractAt(
      name: "Building",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Building>;
    getContractAt(
      name: "IBuilding",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IBuilding>;
    getContractAt(
      name: "IElevator",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IElevator>;
    getContractAt(
      name: "Force",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Force>;
    getContractAt(
      name: "IReentrance",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IReentrance>;
    getContractAt(
      name: "Reentrance",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Reentrance>;
    getContractAt(
      name: "ITelephone",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ITelephone>;
    getContractAt(
      name: "Telephone",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Telephone>;
    getContractAt(
      name: "IToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IToken>;
    getContractAt(
      name: "Token",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Token>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
