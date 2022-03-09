//https://eth-ropsten.alchemyapi.io/v2/pyhg58RetV7LkXlEuEadsjo24cg954Rg

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/pyhg58RetV7LkXlEuEadsjo24cg954Rg',
      accounts: ['3fa4bb83151fc4013cdb1c0e16d4a1bfa09e2408bdb1f0b07f454ecbf09f0137'],
    },
  },
};
