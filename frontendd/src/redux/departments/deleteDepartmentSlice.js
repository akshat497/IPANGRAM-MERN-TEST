
import { createSlice } from "@reduxjs/toolkit";

const deleteDepartmentSlice = createSlice({
  name: "deletedepartment",
  initialState: {
    deletedepartment: null,
    deletedepartmentLoading: false,
    deletedepartmenterror: null,
  },
  reducers: {
    setDeleteDepartment: (state, action) => {
      state.deletedepartment = action.payload;
    },
    setDeleteDepartmentloading: (state, action) => {
      state.deletedepartmentLoading = action.payload;
    },
    setDeleteDepartmenterror: (state, action) => {
      state.deletedepartmenterror = action.payload;
    },
  },
});

export const { setDeleteDepartment, setDeleteDepartmentloading, setDeleteDepartmenterror } = deleteDepartmentSlice.actions;
export default deleteDepartmentSlice.reducer;
