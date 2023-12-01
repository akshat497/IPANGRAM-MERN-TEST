import { GetAllDepartments, GetAllDepartmentsOfManager, LoginUser, RegisterUser } from "../../services/Services";
import { setUser, setLoading, setError } from "./authSlice";import { toast } from "react-toastify";
import { setUserLogin, setLoadingLogin, setErrorLogin } from "./loginSlice";
import { fetchSingleUser, getEmployee } from "../user/userThunk";
import getManagetDepartmentSlice from "../departments/getManagetDepartmentSlice";
import { getDepartment, getDepartmentOfManager } from "../departments/departmentThunk";
export const signupUser = (userData) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await RegisterUser(userData); // Call your API function here
    if(response?.success===true){
      // console.log(response)
      localStorage.setItem("Authorization",  response?.data?.authtoken );
     
      //  window.location.reload()
    }
    console.log(response)
    dispatch(setUser(response));
    dispatch(setLoading(false));
  } catch (error) {
    console.log(error)
    toast.warn(error?.response?.data?.error ||error.message,{
        autoClose:false,
        closeButton:true,
        closeOnClick:true
      })
    dispatch(setError(error?.message));
    dispatch(setLoading(false));
  }
};
export const loginUser = (userData) => async (dispatch) => {
  try {
    
    dispatch(setLoadingLogin(true));
    const response = await LoginUser(userData); // Call your API function here
   

    if(response?.success===true){
      console.log(response)
      dispatch(getEmployee())
      dispatch(fetchSingleUser(response?.data?.authtoken))
      dispatch(getDepartment(response?.data?.authtoken))
      dispatch(getDepartmentOfManager(response?.data?.authtoken))
      localStorage.setItem("Authorization",  response?.data?.authtoken );
      
    }
    dispatch(setUserLogin(response));
    dispatch(setLoadingLogin(false));
  } catch (error) {
    
    toast.warn(error?.response?.data?.error ||error.message,{
      autoClose:false,
      closeButton:true,
      closeOnClick:true
    })
    // toast.error("something went wrong")
    dispatch(setErrorLogin(error?.response));
    dispatch(setLoadingLogin(false));
  }
};