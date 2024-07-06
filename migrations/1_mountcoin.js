const MountCoin =  artifacts.require('mountcoin');

module.exports = function(deployer){
    deployer.deploy(MountCoin);
}