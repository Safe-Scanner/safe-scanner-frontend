import { configureStore } from "@reduxjs/toolkit";
import balanceReducer from "./feature/balanceSlice";
import balancesReducer from "./feature/balancesSlice";
import transactionReducer from "./feature/transactionSlice";

export const store = configureStore({
	reducer: {
		balance: balanceReducer,
		balances: balancesReducer,
		transaction: transactionReducer,
	},
});
