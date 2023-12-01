
import { createSlice } from "@reduxjs/toolkit";

const filterByLocationSlice = createSlice({
  name: "filterByLocation",
  initialState: {
    filterByLocation: null,
    filterByLocationLoading: false,
    filterByLocationerror: null,
  },
  reducers: {
    setfilterByLocation: (state, action) => {
      state.filterByLocation = action.payload;
    },
    setfilterByLocationloading: (state, action) => {
      state.filterByLocationLoading = action.payload;
    },
    setfilterByLocationerror: (state, action) => {
      state.filterByLocationerror = action.payload;
    },
  },
});

export const { setfilterByLocation, setfilterByLocationloading, setfilterByLocationerror } = filterByLocationSlice.actions;
export default filterByLocationSlice.reducer;
