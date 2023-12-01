
import { createSlice } from "@reduxjs/toolkit";

const updateDepartmentSlice = createSlice({
  name: "updatedepartment",
  initialState: {
    updatedepartment: null,
    updatedepartmentloading: false,
    updatedepartmenterror: null,
  },
  reducers: {
    setupdateDepartment: (state, action) => {
      state.updatedepartment = action.payload;
    },
    setupdateDepartmentloading: (state, action) => {
      state.updatedepartmentloading = action.payload;
    },
    setupdateDepartmenterror: (state, action) => {
      state.updatedepartmenterror = action.payload;
    },
  },
});

export const { setupdateDepartment, setupdateDepartmentloading, setupdateDepartmenterror } = updateDepartmentSlice.actions;
export default updateDepartmentSlice.reducer;
