import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	userOp: {},
};

export const userOpSlice: any = createSlice({
	name: "userOp",
	initialState,
	reducers: {
		storeUserOp: (state, action) => {
			state.userOp = action.payload;
		},
	},
});

export const { storeUserOp } = userOpSlice.actions;
export default userOpSlice.reducer;
