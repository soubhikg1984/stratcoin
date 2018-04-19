var StratfitCrowdsale = artifacts.require("./StratfitCrowdsale.sol");

module.exports = function(deployer, network, accounts) {

    const MIN = 60;
    const HOUR = 60 * MIN;
    const DAY =  24 * HOUR;

    //TODO: CHANGE ADDRESS BEFORE PUBLISH!

    const FOUNDER_WALLET_ADDRESS = "0x15EeAD52A519ADF5E55BbE3F0E76A8dF4432b055";

    const DEVELOPERS_ADDRESS = "0xb57E2EB47B575512f5e87Fc91Ef729465e23bCcB";

    const BOUNTIES_ADDRESS = "0xbE167703A7cE6046141865e4649228252b32eb3D";

    const STRATFIT_LABS_RESERVE_ADDRESS = "0x449044cf17e819f22A1E34B5fF642a4de5d071E9";

    const startTime = 1523882104;
    //const startTime = Math.round((new Date(Date.now() - 86400000).getTime())/1000);
    const endTime = startTime + DAY * 42;
    const rate = new web3.BigNumber(5000);
    const wallet = accounts[0];
    const RefundVault = artifacts.require('./crowdsale/RefundVault.sol')
    const StratfitSmartToken = artifacts.require('./StratfitSmartToken.sol')

    deployer.deploy(StratfitSmartToken).then(function() {
        deployer.deploy(RefundVault, wallet, StratfitSmartToken.address).then(function() {
            deployer.deploy(StratfitCrowdsale,
                startTime,
                endTime,    
                wallet,
                FOUNDER_WALLET_ADDRESS,
                DEVELOPERS_ADDRESS,
                BOUNTIES_ADDRESS,
                STRATFIT_LABS_RESERVE_ADDRESS,
                StratfitSmartToken.address,
                RefundVault.address);
        }).catch(function(e) {
            console.error(e);
        });
    }).catch(function(e) {
        console.error(e);
    });

     /*deployer.deploy(StratfitCrowdsale,
                    startTime,
                    endTime,    
                    wallet,
                    FOUNDER_WALLET_ADDRESS,
                    DEVELOPERS_ADDRESS,
                    BOUNTIES_ADDRESS,
                    STRATFIT_LABS_RESERVE_ADDRESS,
                    StratfitSmartToken.address,
                    RefundVault.address)*/
};
