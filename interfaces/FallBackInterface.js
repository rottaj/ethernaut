const abi = [
  {
    "constant": false,

    "name": "receive",
    "payable": "true",
    "type": "function"
  },
  {
    "constant": false,

    "name": "withdraw",
    "payable": "false",
    "type": "function"
  }
]

const contractAddress = "0x0b89E569D49dc196e23EF2a89996Fe206116B149"

module.exports = {
  abi,
  contractAddress
}
