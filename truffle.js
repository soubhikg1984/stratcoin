require('babel-register');
require('babel-polyfill');
var HDWalletProvider = require("truffle-hdwallet-provider");
var infura_apikey = "inTwn3jzOpH5sDawFIte"; // Either use this key or get yours at https://infura.io/signup. It's free.
var mnemonic = "energy fringe kick crack scene wreck bird combine shoe hand route spot";

module.exports = {
    networks: {
        development: {
            host: 'localhost',
            port: 7545,
            gas: 6621975,
            network_id: '5777', // Match any network id
            gasPrice: 20000000000
        },
        ropsten:  {
            provider: new HDWalletProvider(mnemonic, "https://ropsten.infura.io/" + infura_apikey),
            network_id: "*",
            gas: 4698712,
            gasPrice: 300000000000
        },
        coverage: {
            host: "localhost",
            network_id: "*",
            port: 8555,
            gas: 0xfffffffffff,
            gasPrice: 0x01
        }
    },
    solc: {
        optimizer: {
            enabled: true,
            runs: 200
        }
    },
    mocha: {
        useColors: true,
        slow: 30000,
        bail: true
    }
};
