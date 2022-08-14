/*
pragma solidity ^0.8.9;

interface IFallBack {
  function withdraw() public;
  function receive() external payable;

}

contract Fallback {
  address private attackContract = 0x0b89E569D49dc196e23EF2a89996Fe206116B149;
   
  
  function contributeToContract() public payable {
    IFallBack(attackContract).receive(msg.value);
  }
  function withdrawFunds()  public {
    IFallBack(attackContract).withdraw()
  }
}
*/
