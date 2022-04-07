// constants
import Web3EthContract from "web3-eth-contract";
import Web3 from "web3";

const defaultData = {
  stakerStatus: 0,
  isRegistered: false,
};

export const passHolder = async (user) => {
  const abiResponse = await fetch("/config/register_abi.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  const abi = await abiResponse.json();
  const configResponse = await fetch("/config/config.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  const CONFIG = await configResponse.json();
  const { ethereum } = window;
  const metamaskIsInstalled = ethereum && ethereum.isMetaMask;
  if (metamaskIsInstalled) {
    Web3EthContract.setProvider(ethereum);
    try {
      
      const smartContract = new Web3EthContract(
        abi,
        CONFIG.ASTARBASE_ADDRESS
      );

      const stakerStatus = await smartContract.methods.checkStakerStatus(user).call();
      const isRegistered = await smartContract.methods.isRegistered(user).call();

      return {
        isRegistered,
        stakerStatus,
      };

    } catch (err) {
      console.log(err);
      return defaultData;
    }
  } else {
    console.log('Install Metamask.');
  }

  return defaultData;
};
