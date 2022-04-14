const Router = artifacts.require("KiwanoSwapRouter02.sol");
const WETH =  artifacts.require("WETH.sol");

module.exports = async function (deployer, network) {
    let weth;
    const FACTORY_ADDRESS = '0xDf0886C69ce05E37AAD4e6a4093D656bD400B7Ca';
    
    if (network === 'bsc') {
    weth = await WETH.at('0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c');
    }

    await deployer.deploy(Router, FACTORY_ADDRESS, weth.address);
};
