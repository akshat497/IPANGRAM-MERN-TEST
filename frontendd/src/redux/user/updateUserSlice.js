
import { createSlice } from "@reduxjs/toolkit";

const updateuserSlice = createSlice({
  name: "updateuser",
  initialState: {
    updateuser: null,
    updateuserLoading: false,
    updateusererror: null,
  },
  reducers: {
    setupdateuser: (state, action) => {
      state.updateuser = action.payload;
    },
    setupdateuserloading: (state, action) => {
      state.updateuserLoading = action.payload;
    },
    setupdateusererror: (state, action) => {
      state.updateusererror = action.payload;
    },
  },
});

export const { setupdateuser, setupdateuserloading, setupdateusererror } = updateuserSlice.actions;
export default updateuserSlice.reducer;
