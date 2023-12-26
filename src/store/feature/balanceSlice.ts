import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	balance: {},
};

export const balanceSlice: any = createSlice({
	name: "balance",
	initialState,
	reducers: {
		storebalance: (state, action) => {
			state.balance = action.payload;
		},
	},
});

export const { storebalance } = balanceSlice.actions;
export default balanceSlice.reducer;
