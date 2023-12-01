
import { createSlice } from "@reduxjs/toolkit";

const createDepartmentSlice = createSlice({
  name: "createdepartment",
  initialState: {
    createdepartment: null,
    createdepartmentloading: false,
    createdepartmenterror: null,
  },
  reducers: {
    setcreatedepartment: (state, action) => {
      state.createdepartment = action.payload;
    },
    setcreatedepartmentloading: (state, action) => {
      state.createdepartmentloading = action.payload;
    },
    setcreatedepartmenterror: (state, action) => {
      state.createdepartmenterror = action.payload;
    },
  },
});

export const { setcreatedepartment, setcreatedepartmentloading, setcreatedepartmenterror } = createDepartmentSlice.actions;
export default createDepartmentSlice.reducer;
