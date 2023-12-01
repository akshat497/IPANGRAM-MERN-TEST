import { toast } from "react-toastify";

import { setcreatedepartment, setcreatedepartmenterror, setcreatedepartmentloading } from "./createDepartmentSlice";
import { setupdateDepartment, setupdateDepartmentloading, setupdateDepartmenterror } from './updateDepartmentSlice'
import { setDeleteDepartment, setDeleteDepartmentloading, setDeleteDepartmenterror }  from './deleteDepartmentSlice'
import  { setgetdepartment, setgetdepartmentloading, setgetdepartmenterror }  from './getDepartmentSlice'
import { AssignDepartments, CreateDepartment, DeleteDepartments, GetAllDepartments, GetAllDepartmentsOfManager, UpdateDepartment } from "../../services/Services";
import { setgetManagetdepartment, setgetManagetdepartmentloading, setgetManagetdepartmenterror } from './getManagetDepartmentSlice'
import { setassigndepartment, setassigndepartmenterror, setassigndepartmentloading } from "./assignDepartmentSlice";
export const createDepartment = (userdata) => async (dispatch) => {
  try {
    dispatch(setcreatedepartmentloading(true));
    const response = await CreateDepartment(userdata);
   if(response?.success===true){
    dispatch(getDepartmentOfManager(response?.data?.manager)) 
   }
    dispatch(setcreatedepartmentloading(false));
    dispatch(setcreatedepartment(response));
  } catch (error) {
    toast.warn(error?.response?.data?.error ||error?.error)
    dispatch(setcreatedepartmentloading(false));
    dispatch(setcreatedepartmenterror(error));
  }
};
export const assigneDepartment = (userdata) => async (dispatch) => {
    try {
      dispatch(setassigndepartmentloading(true));
      const response = await AssignDepartments(userdata);
     
      dispatch(setassigndepartmentloading(false));
      dispatch(setassigndepartment(response));
    } catch (error) {
      toast.warn(error?.response?.data?.error ||error?.error)
      dispatch(setassigndepartmentloading(false));
      dispatch(setassigndepartmenterror(error));
    }
  };
  export const deleteDepartment = (userdata) => async (dispatch) => {
    try {
      dispatch(setDeleteDepartmentloading(true));
      const response = await DeleteDepartments(userdata);
       
      dispatch(setDeleteDepartmentloading(false));
      dispatch(setDeleteDepartment(response));
    } catch (error) {
      toast.warn(error?.response?.data?.error ||error?.error)
      dispatch(setDeleteDepartmentloading(false));
      dispatch(setDeleteDepartmenterror(error));
    }
  };
  export const getDepartment = (userdata) => async (dispatch) => {
    try {
      dispatch(setgetdepartmentloading(true));
      const response = await GetAllDepartments(userdata);
     
      dispatch(setgetdepartmentloading(false));
      dispatch(setgetdepartment(response?.data));
    } catch (error) {
      toast.warn(error?.response?.data?.error ||error?.error)
      dispatch(setgetdepartmentloading(false));
      dispatch(setgetdepartmenterror(error));
    }
  };
  export const getDepartmentOfManager = (userdata) => async (dispatch) => {
    try {
      dispatch(setgetManagetdepartmentloading(true));
      const response = await GetAllDepartmentsOfManager(userdata);
     
      dispatch(setgetManagetdepartmentloading(false));
      dispatch(setgetManagetdepartment(response?.data));
    } catch (error) {
      toast.warn(error?.response?.data?.error ||error?.error)
      dispatch(setgetManagetdepartmentloading(false));
      dispatch(setgetManagetdepartmenterror(error));
    }
  };
  export const updateDepartment = (userdata) => async (dispatch) => {
    try {
      dispatch(setupdateDepartmentloading(true));
      const response = await UpdateDepartment(userdata);
     
      dispatch(setupdateDepartmentloading(false));
      dispatch(setupdateDepartment(response?.data));
    } catch (error) {
      toast.warn(error?.response?.data?.error ||error?.error)
      dispatch(setupdateDepartmentloading(false));
      dispatch(setupdateDepartmenterror(error));
    }
  };