const HDWalletProvider = require('truffle-hdwallet-provider');

const mnemonic = 'goat swear swim shallow tennis grass sleep elevator cycle color sing inflict';

module.exports = {
  networks: {
    development: {      
      host: 'localhost',
      port: 7545,
      network_id: '*',
      gas: 5000000
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/ce94760c7e284aa1bb8523592ce1a78f"),
      network_id: 4
    },
    ropsten: {
      provider: () => new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/ce94760c7e284aa1bb8523592ce1a78f"),
      network_id: 3
    }
  }
}