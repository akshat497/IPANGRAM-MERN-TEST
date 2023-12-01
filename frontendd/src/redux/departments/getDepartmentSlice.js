
import { createSlice } from "@reduxjs/toolkit";

const getDepartmentSlice = createSlice({
  name: "getdepartment",
  initialState: {
    getdepartment: null,
    getdepartmentloading: false,
    getdepartmenterror: null,
  },
  reducers: {
    setgetdepartment: (state, action) => {
      state.getdepartment = action.payload;
    },
    setgetdepartmentloading: (state, action) => {
      state.getdepartmentloading = action.payload;
    },
    setgetdepartmenterror: (state, action) => {
      state.getdepartmenterror = action.payload;
    },
  },
});

export const { setgetdepartment, setgetdepartmentloading, setgetdepartmenterror } = getDepartmentSlice.actions;
export default getDepartmentSlice.reducer;
