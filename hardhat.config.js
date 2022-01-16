require("dotenv").config;
require("@nomiclabs/hardhat-waffle");

// The next line is part of the sample project, you don't need it in your
// project. It imports a Hardhat task definition, that can be used for
// testing the frontend.
require("./tasks/faucet");

//module.exports = {
//  solidity: "0.7.3"
//};

module.exports = {
  solidity: "0.7.3",
  networks: {
   rinkeby: {
    url: process.env.INFURA_URL || '',
    accounts: process.env.INFURA_KEY !== undefined ? [process.env.INFURA_KEY] : [],
  },
  }
};
