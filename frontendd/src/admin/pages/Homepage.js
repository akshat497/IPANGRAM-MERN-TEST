import React, { useEffect } from 'react'
import AdminHeader from '../components/common/AdminHeader'
import '../components/style/adminStyle.css'
import { Route, Routes } from 'react-router-dom'
import EmployeeDataTable from '../components/main/EmployeeDataTable'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSingleUser, getEmployee } from '../../redux/user/userThunk'
import { GetAllDepartments, GetAllDepartmentsOfManager } from '../../services/Services'
import { getDepartment, getDepartmentOfManager } from '../../redux/departments/departmentThunk'
import Departments from '../components/main/Departments'
import Profile from '../components/main/Profile'
export default function Homepage() {
    const allEmployees = useSelector((state) => state.fetchuser.fetchuser);
    const dispatch=useDispatch()
    useEffect(()=>{
        if(allEmployees===null)
        dispatch(getEmployee())
        dispatch(fetchSingleUser(localStorage.getItem("Authorization")))
        dispatch(getDepartment(localStorage.getItem("Authorization")))
        dispatch(getDepartmentOfManager(localStorage.getItem("Authorization")))
    },[allEmployees])
  return (
    <>
        <AdminHeader/>
        <Routes>
   
   <Route path="/" element={<EmployeeDataTable/> }/>
   <Route path="/departments" element={<Departments/> }/>
   <Route path="/profile" element={<Profile/> }/>
   {/* <Route path="/details" element={ }/>/> */}
  
</Routes>
    </>
  )
}
