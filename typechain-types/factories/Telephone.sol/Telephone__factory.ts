/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  Telephone,
  TelephoneInterface,
} from "../../Telephone.sol/Telephone";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
];

const _bytecode =
  "0x608060405273fde2538936b727fce87b5e1ed8d6c9b440669ee36000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555073b702dc679dce8d27c77ac49a63b9a138b674929e600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055503480156100b957600080fd5b5060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a6f9dae1600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518263ffffffff1660e01b81526004016101989190610210565b600060405180830381600087803b1580156101b257600080fd5b505af11580156101c6573d6000803e3d6000fd5b5050505061022b565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006101fa826101cf565b9050919050565b61020a816101ef565b82525050565b60006020820190506102256000830184610201565b92915050565b603f806102396000396000f3fe6080604052600080fdfea2646970667358221220e117032e81d7cb2e923a8607df2cec1f071c74f398054fd8327d9a15b65eedfd64736f6c63430008090033";

type TelephoneConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TelephoneConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Telephone__factory extends ContractFactory {
  constructor(...args: TelephoneConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Telephone> {
    return super.deploy(overrides || {}) as Promise<Telephone>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Telephone {
    return super.attach(address) as Telephone;
  }
  override connect(signer: Signer): Telephone__factory {
    return super.connect(signer) as Telephone__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TelephoneInterface {
    return new utils.Interface(_abi) as TelephoneInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Telephone {
    return new Contract(address, _abi, signerOrProvider) as Telephone;
  }
}
