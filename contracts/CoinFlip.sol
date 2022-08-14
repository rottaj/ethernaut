pragma solidity ^0.8.9;

interface ICoinFlip {
  function flip() external returns (bool);
}

contract CoinFlip {
  address targetAddress = 0x8038816B5d233282fF19a26E9AA0105FD9A61971;
  uint256 FACTOR = 57896044618658097711785492504343953926634992332820282019728792003956564819968;

  function determineGuess() public returns (uint256 blockValue) {
    uint256 blockValue = uint256(blockhash(block.number - 1));
    uint256 coinFlip = blockValue / FACTOR;
    return blockValue;
  }
}
