require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.1',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/92s3ddO0y5vd7xnO71USvMRSRQnieg9h',
      accounts: ['880afa4798bd70e3a0459bc17ab62454a57ff517d5a022ca825156152565b016'],
    },
  },
};