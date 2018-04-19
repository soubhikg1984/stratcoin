#!/usr/bin/env bash

UNIFIED="Unified.sol";
rm -rf Unified.sol

cd contracts/

UNIFIED_PATH="../$UNIFIED"

function unify() {
	grep -v '^[pragma|import]' $1 >> "$UNIFIED_PATH"
}

echo "pragma solidity ^0.4.18;" > "$UNIFIED_PATH"

# OZ
unify math/SafeMath.sol
unify ownership/Ownable.sol
unify ownership/Claimable.sol
unify token/ERC20Basic.sol
unify token/ERC20.sol
unify token/BasicToken.sol
unify token/LimitedTransferToken.sol
unify token/StandardToken.sol
unify token/MintableToken.sol

unify bancor/ISmartToken.sol
unify bancor/LimitedTransferBancorSmartToken.sol
unify StratfitSmartToken.sol

unify StratfitVestingTrustee.sol

unify crowdsale/RefundVault.sol
unify crowdsale/Crowdsale.sol
unify crowdsale/FinalizableCrowdsale.sol

# STRATFIT
unify StratfitCrowdsale.sol
