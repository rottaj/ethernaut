pragma solidity ^0.8.9;

interface IBuilding {
  function isLastFloor(uint) external returns (bool);
}

interface IElevator {
  function goTo(uint _floor) external;
}

abstract contract Elevator is IBuilding {

  address targetAddress = 0xe18e343288f56C2cBc41F4FFD289dE7C35498Da8;
  IElevator targetContract;
  constructor() {
    targetContract = IElevator(targetAddress);
    targetContract.goTo(1);
  }
}
