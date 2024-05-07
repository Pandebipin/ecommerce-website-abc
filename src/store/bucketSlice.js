import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  filterdProduct: [],
  user: { name: "", email: "" },
};

export const bucketSlice = createSlice({
  name: "filterProduct",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = {
        name: action.payload,
        email: action.payload,
      };
    },
    logout: (state) => {
      state.user = null;
    },
    setFilteredProduct: (state, action) => {
      state.filterdProduct = action.payload;
      // console.log(setFilteredProduct);
    },
  },
});
export const { login, logout, setFilteredProduct } = bucketSlice.actions; // renamed to setFilteredProduct
export default bucketSlice.reducer;
