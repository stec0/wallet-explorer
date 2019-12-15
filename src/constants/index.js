const infuraUrl = "https://mainnet.infura.io/v3/7d0d81d0919f4f05b9ab6634be01ee73";

const guardianManagerAddress = "0xFF5A7299ff6f0fbAad9b38906b77d08c0FBdc9A7";

const myFavoriteTokens = [
    {
        "name": "SAI",
        "address": "0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359"
    },
    {
        "name": "DAI",
        "address": "0x6b175474e89094c44da98b954eedeac495271d0f"
    },
    {
        "name": "MKR",
        "address": "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2"
    },
    {
        "name": "BAT",
        "address": "0x0d8775f648430679a709e98d2b0cb6250d2887ef"
    },
    {
        "name": "ZRX",
        "address": "0xe41d2489571d322189246dafa5ebde1f4699f498"
    },
    {
        "name": "KNC",
        "address": "0xdd974d5c2e2928dea5f71b9825b8b646686bd200"
    },
    {
        "name": "LINK",
        "address": "0x514910771af9ca656af840dff83e8264ecf986ca"
    },
    {
        "name": "REP",
        "address": "0x1985365e9f78359a9B6AD760e32412f4a445E862"
    },
    {
        "name": "SNX",
        "address": "0xc011a72400e58ecd99ee497cf89e3775d4bd732f"
    }
]

const erc20Abi = [
    {
        "constant": true,
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_spender",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_from",
                "type": "address"
            },
            {
                "name": "_to",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "decimals",
        "outputs": [
            {
                "name": "",
                "type": "uint8"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_owner",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "name": "balance",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_to",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_owner",
                "type": "address"
            },
            {
                "name": "_spender",
                "type": "address"
            }
        ],
        "name": "allowance",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "payable": true,
        "stateMutability": "payable",
        "type": "fallback"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "spender",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    }
];

const guardianManagerAbi = [
    {
       "constant":true,
       "inputs":[
 
       ],
       "name":"securityWindow",
       "outputs":[
          {
             "name":"",
             "type":"uint256"
          }
       ],
       "payable":false,
       "stateMutability":"view",
       "type":"function"
    },
    {
       "constant":false,
       "inputs":[
          {
             "name":"_wallet",
             "type":"address"
          }
       ],
       "name":"init",
       "outputs":[
 
       ],
       "payable":false,
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "constant":false,
       "inputs":[
          {
             "name":"_wallet",
             "type":"address"
          },
          {
             "name":"_guardian",
             "type":"address"
          }
       ],
       "name":"revokeGuardian",
       "outputs":[
 
       ],
       "payable":false,
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "constant":false,
       "inputs":[
          {
             "name":"_wallet",
             "type":"address"
          },
          {
             "name":"_guardian",
             "type":"address"
          }
       ],
       "name":"cancelGuardianRevokation",
       "outputs":[
 
       ],
       "payable":false,
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "constant":true,
       "inputs":[
          {
             "name":"_wallet",
             "type":"address"
          }
       ],
       "name":"getNonce",
       "outputs":[
          {
             "name":"nonce",
             "type":"uint256"
          }
       ],
       "payable":false,
       "stateMutability":"view",
       "type":"function"
    },
    {
       "constant":false,
       "inputs":[
          {
             "name":"_wallet",
             "type":"address"
          },
          {
             "name":"_guardian",
             "type":"address"
          }
       ],
       "name":"confirmGuardianRevokation",
       "outputs":[
 
       ],
       "payable":false,
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "constant":true,
       "inputs":[
          {
             "name":"_wallet",
             "type":"address"
          }
       ],
       "name":"guardianCount",
       "outputs":[
          {
             "name":"_count",
             "type":"uint256"
          }
       ],
       "payable":false,
       "stateMutability":"view",
       "type":"function"
    },
    {
       "constant":false,
       "inputs":[
          {
             "name":"_wallet",
             "type":"address"
          },
          {
             "name":"_module",
             "type":"address"
          }
       ],
       "name":"addModule",
       "outputs":[
 
       ],
       "payable":false,
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "constant":false,
       "inputs":[
          {
             "name":"_wallet",
             "type":"address"
          },
          {
             "name":"_guardian",
             "type":"address"
          }
       ],
       "name":"confirmGuardianAddition",
       "outputs":[
 
       ],
       "payable":false,
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "constant":true,
       "inputs":[
 
       ],
       "name":"securityPeriod",
       "outputs":[
          {
             "name":"",
             "type":"uint256"
          }
       ],
       "payable":false,
       "stateMutability":"view",
       "type":"function"
    },
    {
       "constant":false,
       "inputs":[
          {
             "name":"_token",
             "type":"address"
          }
       ],
       "name":"recoverToken",
       "outputs":[
 
       ],
       "payable":false,
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "constant":false,
       "inputs":[
          {
             "name":"_wallet",
             "type":"address"
          },
          {
             "name":"_guardian",
             "type":"address"
          }
       ],
       "name":"cancelGuardianAddition",
       "outputs":[
 
       ],
       "payable":false,
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "constant":false,
       "inputs":[
          {
             "name":"_wallet",
             "type":"address"
          },
          {
             "name":"_data",
             "type":"bytes"
          },
          {
             "name":"_nonce",
             "type":"uint256"
          },
          {
             "name":"_signatures",
             "type":"bytes"
          },
          {
             "name":"_gasPrice",
             "type":"uint256"
          },
          {
             "name":"_gasLimit",
             "type":"uint256"
          }
       ],
       "name":"execute",
       "outputs":[
          {
             "name":"success",
             "type":"bool"
          }
       ],
       "payable":false,
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "constant":false,
       "inputs":[
          {
             "name":"_wallet",
             "type":"address"
          },
          {
             "name":"_guardian",
             "type":"address"
          }
       ],
       "name":"addGuardian",
       "outputs":[
 
       ],
       "payable":false,
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "constant":true,
       "inputs":[
          {
             "name":"",
             "type":"address"
          }
       ],
       "name":"relayer",
       "outputs":[
          {
             "name":"nonce",
             "type":"uint256"
          }
       ],
       "payable":false,
       "stateMutability":"view",
       "type":"function"
    },
    {
       "constant":true,
       "inputs":[
          {
             "name":"_wallet",
             "type":"address"
          },
          {
             "name":"_guardian",
             "type":"address"
          }
       ],
       "name":"isGuardian",
       "outputs":[
          {
             "name":"_isGuardian",
             "type":"bool"
          }
       ],
       "payable":false,
       "stateMutability":"view",
       "type":"function"
    },
    {
       "constant":true,
       "inputs":[
 
       ],
       "name":"guardianStorage",
       "outputs":[
          {
             "name":"",
             "type":"address"
          }
       ],
       "payable":false,
       "stateMutability":"view",
       "type":"function"
    },
    {
       "constant":true,
       "inputs":[
          {
             "name":"_wallet",
             "type":"address"
          }
       ],
       "name":"getGuardians",
       "outputs":[
          {
             "name":"_guardians",
             "type":"address[]"
          }
       ],
       "payable":false,
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "name":"_registry",
             "type":"address"
          },
          {
             "name":"_guardianStorage",
             "type":"address"
          },
          {
             "name":"_securityPeriod",
             "type":"uint256"
          },
          {
             "name":"_securityWindow",
             "type":"uint256"
          }
       ],
       "payable":false,
       "stateMutability":"nonpayable",
       "type":"constructor"
    },
    {
       "anonymous":false,
       "inputs":[
          {
             "indexed":true,
             "name":"wallet",
             "type":"address"
          },
          {
             "indexed":true,
             "name":"guardian",
             "type":"address"
          },
          {
             "indexed":false,
             "name":"executeAfter",
             "type":"uint256"
          }
       ],
       "name":"GuardianAdditionRequested",
       "type":"event"
    },
    {
       "anonymous":false,
       "inputs":[
          {
             "indexed":true,
             "name":"wallet",
             "type":"address"
          },
          {
             "indexed":true,
             "name":"guardian",
             "type":"address"
          },
          {
             "indexed":false,
             "name":"executeAfter",
             "type":"uint256"
          }
       ],
       "name":"GuardianRevokationRequested",
       "type":"event"
    },
    {
       "anonymous":false,
       "inputs":[
          {
             "indexed":true,
             "name":"wallet",
             "type":"address"
          },
          {
             "indexed":true,
             "name":"guardian",
             "type":"address"
          }
       ],
       "name":"GuardianAdditionCancelled",
       "type":"event"
    },
    {
       "anonymous":false,
       "inputs":[
          {
             "indexed":true,
             "name":"wallet",
             "type":"address"
          },
          {
             "indexed":true,
             "name":"guardian",
             "type":"address"
          }
       ],
       "name":"GuardianRevokationCancelled",
       "type":"event"
    },
    {
       "anonymous":false,
       "inputs":[
          {
             "indexed":true,
             "name":"wallet",
             "type":"address"
          },
          {
             "indexed":true,
             "name":"guardian",
             "type":"address"
          }
       ],
       "name":"GuardianAdded",
       "type":"event"
    },
    {
       "anonymous":false,
       "inputs":[
          {
             "indexed":true,
             "name":"wallet",
             "type":"address"
          },
          {
             "indexed":true,
             "name":"guardian",
             "type":"address"
          }
       ],
       "name":"GuardianRevoked",
       "type":"event"
    },
    {
       "anonymous":false,
       "inputs":[
          {
             "indexed":true,
             "name":"wallet",
             "type":"address"
          },
          {
             "indexed":true,
             "name":"success",
             "type":"bool"
          },
          {
             "indexed":false,
             "name":"signedHash",
             "type":"bytes32"
          }
       ],
       "name":"TransactionExecuted",
       "type":"event"
    },
    {
       "anonymous":false,
       "inputs":[
          {
             "indexed":false,
             "name":"name",
             "type":"bytes32"
          }
       ],
       "name":"ModuleCreated",
       "type":"event"
    },
    {
       "anonymous":false,
       "inputs":[
          {
             "indexed":false,
             "name":"wallet",
             "type":"address"
          }
       ],
       "name":"ModuleInitialised",
       "type":"event"
    }
 ];

 export {
    infuraUrl,
    guardianManagerAddress,
    myFavoriteTokens,
    erc20Abi,
    guardianManagerAbi
 }