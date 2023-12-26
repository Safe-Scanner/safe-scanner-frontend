import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	transaction: {},
};

export const transactionSlice: any = createSlice({
	name: "transaction",
	initialState,
	reducers: {
		storetransaction: (state, action) => {
			state.transaction = action.payload;
		},
	},
});

export const { storetransaction } = transactionSlice.actions;
export default transactionSlice.reducer;
