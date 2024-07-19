import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  secondName: "",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    addSecondName: (state, action) => {
      state.secondName = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addFirstName, addSecondName } = counterSlice.actions;

export default counterSlice.reducer;
