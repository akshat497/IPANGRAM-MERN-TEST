
import { createSlice } from "@reduxjs/toolkit";

const deleteuserSlice = createSlice({
  name: "deleteuser",
  initialState: {
    deleteuser: null,
    deleteuserLoading: false,
    deleteusererror: null,
  },
  reducers: {
    setDeleteuser: (state, action) => {
      state.deleteuser = action.payload;
    },
    setDeleteuserloading: (state, action) => {
      state.deleteuserLoading = action.payload;
    },
    setDeleteusererror: (state, action) => {
      state.deleteusererror = action.payload;
    },
  },
});

export const { setDeleteuser, setDeleteuserloading, setDeleteusererror } = deleteuserSlice.actions;
export default deleteuserSlice.reducer;
