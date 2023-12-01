import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../auth/authSlice";
import loginReducer from "../auth/loginSlice"
import createdepartmentReducer from "../departments/createDepartmentSlice"
import updatedepartmentReducer from "../departments/updateDepartmentSlice"
import deletedepartmentReducer from "../departments/deleteDepartmentSlice"
import getdepartmentReducer from "../departments/getDepartmentSlice"
import fetchuserReducer from '../user/fetchUserSlice'
import fetchsingleuserReducer from '../user/fethSingleUserSlice'
import getManagetdepartmentReducer from '../departments/getManagetDepartmentSlice'
import getuserdetailsReducer from '../user/getuserDetailsSlice'
import filterByNameReducer from '../user/filterByNameSlice'
import thunk from "redux-thunk";
const store = configureStore({
    reducer: {
      auth: authReducer,
      login: loginReducer,
      createdepartment:createdepartmentReducer,
      getdepartment:getdepartmentReducer,
      deletedepartment:deletedepartmentReducer,
      updatedepartment: updatedepartmentReducer,
      fetchuser:fetchuserReducer,
      fetchsingleuser:fetchsingleuserReducer,
      getManagetdepartment:getManagetdepartmentReducer,
      getuserdetails:getuserdetailsReducer,
      filterByName:filterByNameReducer
     
      
    },
    middleware: [thunk],
  });
  
  export default store;