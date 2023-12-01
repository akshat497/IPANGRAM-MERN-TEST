import { toast } from "react-toastify";
import { DeleteEmployee, FetchAllUser, FetchUser, FilterEmployees, FilterEmployeesByLocation, GetUserDetails, UpdateEmployee } from "../../services/Services";
import { setDeleteuser, setDeleteusererror, setDeleteuserloading } from "./deleteUserSlice";
import { setupdateuser, setupdateusererror, setupdateuserloading } from "./updateUserSlice";
import { setfetchuser, setfetchusererror, setfetchuserloading } from "./fetchUserSlice";
import { setfetchsingleuser, setfetchsingleuserloading, setfetchsingleusererror } from './fethSingleUserSlice'
import { setgetuserdetails, setgetuserdetailserror, setgetuserdetailsloading } from "./getuserDetailsSlice";
import { setfilterByName, setfilterByNameerror, setfilterByNameloading } from "./filterByNameSlice";
import { setfilterByLocation, setfilterByLocationerror, setfilterByLocationloading } from "./filterByLocationSlice";

export const filterEmployees = (userdata) => async (dispatch) => {
    try {
      dispatch(setfilterByNameloading(true));
      const response = await FilterEmployees(userdata);
     
      dispatch(setfilterByNameloading(false));
      dispatch(setfilterByName(response));
    } catch (error) {
      toast.warn(error?.response?.data?.error||error?.error)
      dispatch(setfilterByNameloading(false));
      dispatch(setfilterByNameerror(error));
    }
  };
  export const filterEmployeesByLocation = (userdata) => async (dispatch) => {
    try {
      dispatch(setfilterByLocationloading(true));
      const response = await FilterEmployeesByLocation(userdata);
     
      dispatch(setfilterByLocationloading(false));
      dispatch(setfilterByLocation(response));
    } catch (error) {
      toast.warn(error?.response?.data?.error||error?.error)
      dispatch(setfilterByLocationloading(false));
      dispatch(setfilterByLocationerror(error));
    }
  };
export const fetchSingleUser = (userdata) => async (dispatch) => {
    try {
      dispatch(setfetchsingleuserloading(true));
      const response = await FetchUser(userdata);
     
      dispatch(setfetchsingleuserloading(false));
      dispatch(setfetchsingleuser(response));
    } catch (error) {
      toast.warn(error?.response?.data?.error||error?.error)
      dispatch(setfetchsingleuserloading(false));
      dispatch(setfetchsingleusererror(error));
    }
  };
export const deleteEmployee = (userdata) => async (dispatch) => {
    try {
      dispatch(setDeleteuserloading(true));
      const response = await DeleteEmployee(userdata);
      if(response.success===true){
        dispatch(getEmployee())
     }
      dispatch(setDeleteuserloading(false));
      dispatch(setDeleteuser(response));
    } catch (error) {
      toast.warn(error?.response?.data?.error||error?.error)
      dispatch(setDeleteuserloading(false));
      dispatch(setDeleteusererror(error));
    }
  };
  export const updateEmployee = (userdata) => async (dispatch) => {
    try {
      dispatch(setupdateuserloading(true));
      const response = await UpdateEmployee(userdata);
     if(response.success===true){
        dispatch(getEmployee())
     }
      dispatch(setupdateuserloading(false));
      dispatch(setupdateuser(response));
    } catch (error) {
      toast.warn(error?.response?.data?.error||error?.error)
      dispatch(setupdateuserloading(false));
      dispatch(setupdateusererror(error));
    }
  };
  export const getEmployee = (userdata) => async (dispatch) => {
    try {
      dispatch(setfetchuserloading(true));
      const response = await FetchAllUser(userdata);
     console.log(response)
      dispatch(setfetchuserloading(false));
      dispatch(setfetchuser(response?.data?.user));
    } catch (error) {
      toast.warn(error?.response?.data?.error||error?.error)
      dispatch(setfetchuserloading(false));
      dispatch(setfetchusererror(error));
    }
  };
  export const getuserdetails = (userdata) => async (dispatch) => {
    try {
      dispatch(setgetuserdetailsloading(true));
      const response = await GetUserDetails(userdata);
     console.log(response)
      dispatch(setgetuserdetailsloading(false));
      dispatch(setgetuserdetails(response?.data));
    } catch (error) {
      toast.warn(error?.response?.data?.error||error?.error)
      dispatch(setgetuserdetailsloading(false));
      dispatch(setgetuserdetailserror(error));
    }
  };