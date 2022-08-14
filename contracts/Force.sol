pragma solidity ^0.8.9;



contract Force {
  address payable targetAddress = payable(0xaB8C0ecbff58C71e81904FF2F9865Cb9874F03f9);

  function sendToTarget() public payable {
    selfdestruct(targetAddress);
  }

  receive () external payable {}

}
