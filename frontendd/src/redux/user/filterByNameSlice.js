
import { createSlice } from "@reduxjs/toolkit";

const filterByNameSlice = createSlice({
  name: "filterByName",
  initialState: {
    filterByName: null,
    filterByNameLoading: false,
    filterByNameerror: null,
  },
  reducers: {
    setfilterByName: (state, action) => {
      state.filterByName = action.payload;
    },
    setfilterByNameloading: (state, action) => {
      state.filterByNameLoading = action.payload;
    },
    setfilterByNameerror: (state, action) => {
      state.filterByNameerror = action.payload;
    },
  },
});

export const { setfilterByName, setfilterByNameloading, setfilterByNameerror } = filterByNameSlice.actions;
export default filterByNameSlice.reducer;
