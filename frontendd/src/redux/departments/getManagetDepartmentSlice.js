
import { createSlice } from "@reduxjs/toolkit";

const getManagetDepartmentSlice = createSlice({
  name: "getManagetdepartment",
  initialState: {
    getManagetdepartment: null,
    getManagetdepartmentloading: false,
    getManagetdepartmenterror: null,
  },
  reducers: {
    setgetManagetdepartment: (state, action) => {
      state.getManagetdepartment = action.payload;
    },
    setgetManagetdepartmentloading: (state, action) => {
      state.getManagetdepartmentloading = action.payload;
    },
    setgetManagetdepartmenterror: (state, action) => {
      state.getManagetdepartmenterror = action.payload;
    },
  },
});

export const { setgetManagetdepartment, setgetManagetdepartmentloading, setgetManagetdepartmenterror } = getManagetDepartmentSlice.actions;
export default getManagetDepartmentSlice.reducer;
