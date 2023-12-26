import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	balances: {},
};

export const balancesSlice: any = createSlice({
	name: "balances",
	initialState,
	reducers: {
		storebalances: (state, action) => {
			state.balances = action.payload;
		},
	},
});

export const { storebalances } = balancesSlice.actions;
export default balancesSlice.reducer;
