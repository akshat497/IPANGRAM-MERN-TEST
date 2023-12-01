
import { createSlice } from "@reduxjs/toolkit";

const fetchuserSlice = createSlice({
  name: "fetchuser",
  initialState: {
    fetchuser: null,
    fetchuserLoading: false,
    fetchusererror: null,
  },
  reducers: {
    setfetchuser: (state, action) => {
      state.fetchuser = action.payload;
    },
    setfetchuserloading: (state, action) => {
      state.fetchuserLoading = action.payload;
    },
    setfetchusererror: (state, action) => {
      state.fetchusererror = action.payload;
    },
  },
});

export const { setfetchuser, setfetchuserloading, setfetchusererror } = fetchuserSlice.actions;
export default fetchuserSlice.reducer;
