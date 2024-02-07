import { configureStore } from "@reduxjs/toolkit";
import balanceReducer from "./feature/balanceSlice";
import balancesReducer from "./feature/balancesSlice";
import transactionReducer from "./feature/transactionSlice";
import userOpReducer from "./feature/userOpSlice";

export const store = configureStore({
	reducer: {
		balance: balanceReducer,
		balances: balancesReducer,
		transaction: transactionReducer,
		userOp: userOpReducer,
	},
});
