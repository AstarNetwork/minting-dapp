// log
import store from "../store";
import { passHolder } from "./astarBase";


const fetchDataRequest = () => {
  return {
    type: "CHECK_DATA_REQUEST",
  };
};

const fetchDataSuccess = (payload) => {
  return {
    type: "CHECK_DATA_SUCCESS",
    payload: payload,
  };
};

const fetchDataFailed = (payload) => {
  return {
    type: "CHECK_DATA_FAILED",
    payload: payload,
  };
};

export const fetchData = () => {
  return async (dispatch) => {
    dispatch(fetchDataRequest());
    try {
      let totalSupply = await store
        .getState()
        .blockchain.smartContract.methods.totalSupply()
        .call();
      // let cost = await store
      //   .getState()
      //   .blockchain.smartContract.methods.cost()
      //   .call();

      let balance = 0;

      if (store.getState().blockchain.account) {
        balance = await store
          .getState()
          .blockchain.smartContract.methods.balanceOf(store.getState().blockchain.account)
          .call();
      }

      const { stakerStatus, isRegistered } = await passHolder(store.getState().blockchain.account);

      dispatch(
        fetchDataSuccess({
          balance,
          totalSupply,
          stakerStatus,
          isRegistered,
          isPassHolder: stakerStatus > 0 && isRegistered
        })
      );
    } catch (err) {
      console.log(err);
      dispatch(fetchDataFailed("Could not load data from contract."));
    }
  };
};
