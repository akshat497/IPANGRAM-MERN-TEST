
import axios from "axios";
import { createAxiosInstance, createAxiosInstanceAuth } from "./InstanceApi";
export const RegisterUser = async (body) => {
  try {
    const response = await axios.post(process.env.REACT_APP_BASE_URL+"/auth/createuser", body);
    return response.data;
  } catch (error) {
    throw error;
  }
};
 
export const LoginUser = async (body) => {
  try {
    const response = await axios.post(process.env.REACT_APP_BASE_URL+"/auth/login", body);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const FetchUser = async (body) => {
  try {
    const response = await createAxiosInstanceAuth().get(process.env.REACT_APP_BASE_URL+"/auth/fetchuser", body);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const FetchAllUser = async (body) => {
  try {
    const response = await createAxiosInstanceAuth().get(process.env.REACT_APP_BASE_URL+"/auth/fetch-all-user", body);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const CreateDepartment = async (body) => {
  try {
    const response = await createAxiosInstanceAuth().post(process.env.REACT_APP_BASE_URL+"/departments/add-departments", body);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const GetAllDepartments = async (body) => {
  try {
    const response = await createAxiosInstanceAuth().get(process.env.REACT_APP_BASE_URL+"/departments/get-all-departments", body);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const GetAllDepartmentsOfManager = async (body) => {
  try {
    const response = await createAxiosInstanceAuth().get(process.env.REACT_APP_BASE_URL+"/departments/get-all-departments-of-manager", body);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const AssignDepartments = async (body) => {
  try {
    const response = await createAxiosInstanceAuth().put(process.env.REACT_APP_BASE_URL+"/departments/assign-department", body);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const DeleteDepartments = async (body) => {
  try {
    const response = await createAxiosInstanceAuth().delete(process.env.REACT_APP_BASE_URL+"/departments/delete-department", body);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const DeleteEmployee = async (body) => {
  try {
    const response = await createAxiosInstanceAuth().delete(process.env.REACT_APP_BASE_URL+`/usercrud/delete-employee/${body}`, body);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const UpdateEmployee = async (body) => {
  try {
    const response = await createAxiosInstanceAuth().put(process.env.REACT_APP_BASE_URL+`/usercrud/update-employee/${body.id}`, body);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const UpdateDepartment = async (body) => {
  try {
   
    const response = await createAxiosInstanceAuth().put(process.env.REACT_APP_BASE_URL+`/departments/update-department/${body.manager}`, body);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const FilterEmployees = async (body) => {
  try {
    const response = await createAxiosInstanceAuth().post(process.env.REACT_APP_BASE_URL+"/usercrud/filter-employees-by-name", body);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const FilterEmployeesByLocation = async (body) => {
  try {
    const response = await createAxiosInstanceAuth().post(process.env.REACT_APP_BASE_URL+"/usercrud/filter-employees-by-location", body);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const GetUserDetails = async (body) => {
  try {
    const data={
      userId:body
    }
    const response = await axios.post(process.env.REACT_APP_BASE_URL+"/usercrud/getUserDetails", data);
    return response.data;
  } catch (error) {
    throw error;
  }
};