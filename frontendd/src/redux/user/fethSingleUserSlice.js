
import { createSlice } from "@reduxjs/toolkit";

const fetchsingleuserSlice = createSlice({
  name: "fetchsingleuser",
  initialState: {
    fetchsingleuser: null,
    fetchsingleuserLoading: false,
    fetchsingleusererror: null,
  },
  reducers: {
    setfetchsingleuser: (state, action) => {
      state.fetchsingleuser = action.payload;
    },
    setfetchsingleuserloading: (state, action) => {
      state.fetchsingleuserLoading = action.payload;
    },
    setfetchsingleusererror: (state, action) => {
      state.fetchsingleusererror = action.payload;
    },
  },
});

export const { setfetchsingleuser, setfetchsingleuserloading, setfetchsingleusererror } = fetchsingleuserSlice.actions;
export default fetchsingleuserSlice.reducer;
