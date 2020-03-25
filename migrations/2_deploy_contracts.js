/* global artifacts, web3 */

const Casino = artifacts.require("Casino");

module.exports = function(deployer) {
  // TODO: Implementation
  const minimumBet = "0.1";
  const maxNumberOfPlayers = "2";
  const minimumBetEthers = web.utils.toWei(minimumBet, "ether");

  deployer.deploy(Casino, minimumBetEthers, maxNumberOfPlayers, {
    gas: 5000000
  });
};
