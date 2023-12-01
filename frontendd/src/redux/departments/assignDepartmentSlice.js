
import { createSlice } from "@reduxjs/toolkit";

const assigndepartmentSlice = createSlice({
  name: "assigndepartment",
  initialState: {
    assigndepartment: null,
    assigndepartmentloading: false,
    assigndepartmenterror: null,
  },
  reducers: {
    setassigndepartment: (state, action) => {
      state.assigndepartment = action.payload;
    },
    setassigndepartmentloading: (state, action) => {
      state.assigndepartmentloading = action.payload;
    },
    setassigndepartmenterror: (state, action) => {
      state.assigndepartmenterror = action.payload;
    },
  },
});

export const { setassigndepartment, setassigndepartmentloading, setassigndepartmenterror } = assigndepartmentSlice.actions;
export default assigndepartmentSlice.reducer;
