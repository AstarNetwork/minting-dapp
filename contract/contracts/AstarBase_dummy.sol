// SPDX-License-Identifier: BSD-3-Clause

pragma solidity >=0.7.0;
import "./IAstarBase.sol";

contract AstarBase is IAstarBase {
    /// @notice Check if given address was registered in Astarbase
    /// @param evmAddress, EVM address used for registration
    function isRegistered(address evmAddress) external override pure returns (bool){
        // dummy implementation
        if (evmAddress == address(0)) return true;
        return false;
    }

    /// @notice Check if given address was registered and return staked amount
    /// @param evmAddress, EVM address used for registration
    /// @return amount, staked amount on the SS58 address (mapped with evmAddress)
    function checkStakerStatus(address evmAddress)
        external override
        pure
        returns (uint128){
        // dummy implementation
        if (evmAddress == address(0)) return 1;
        return 0;
    }
}
