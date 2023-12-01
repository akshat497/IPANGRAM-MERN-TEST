
import { createSlice } from "@reduxjs/toolkit";

const getuserdetailsSlice = createSlice({
  name: "getuserdetails",
  initialState: {
    getuserdetails: null,
    getuserdetailsLoading: false,
    getuserdetailserror: null,
  },
  reducers: {
    setgetuserdetails: (state, action) => {
      state.getuserdetails = action.payload;
    },
    setgetuserdetailsloading: (state, action) => {
      state.getuserdetailsLoading = action.payload;
    },
    setgetuserdetailserror: (state, action) => {
      state.getuserdetailserror = action.payload;
    },
  },
});

export const { setgetuserdetails, setgetuserdetailsloading, setgetuserdetailserror } = getuserdetailsSlice.actions;
export default getuserdetailsSlice.reducer;
