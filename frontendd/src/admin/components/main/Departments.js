import React, { useContext, useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { useSelector, useDispatch } from 'react-redux';
import { FaPlusCircle } from 'react-icons/fa';
import CreateDepartmentModal from '../../modals/CreateDepModel';
import Context from '../../../context/Context';
import { getuserdetails } from '../../../redux/user/userThunk';
import AssignDepartmentModal from '../../modals/AssignModel';
import UpdateDepartmentModal from '../../modals/UpdateDepartementModels';
import DeleteDepartmentModal from '../../modals/DeleteDeparrtmentModels';
import { getDepartment } from '../../../redux/departments/departmentThunk';

const Departments = () => {
  const { isSidebarOpen, clickedRow, setclickedRow } = useContext(Context);
  const allmanagementDepartment = useSelector((state) => state.getManagetdepartment.getManagetdepartment);
  const allDepartment = useSelector((state) => state.getdepartment.getdepartment);
 
  const User = useSelector((state) => state.fetchsingleuser.fetchsingleuser);
  const dispatch = useDispatch();
  const [employeeDetails, setEmployeeDetails] = useState({});
  const [departments, setdepartments] = useState([]);
 useEffect(()=>{
    if(User!==null){
        if(User?.data?.user?.role==="employee"){
            dispatch(getDepartment())
            setdepartments(allDepartment)
        }else{
            setdepartments(allmanagementDepartment)
        }
    }
 },[User])
  const userDetails = useSelector((state) => state.getuserdetails.getuserdetails);
  useEffect(() => {
    const fetchEmployeeDetails = async () => {
      let details = {};
      if(departments!==null){
        for (const department of departments) {
          const employeeIds = department.employees;
  
          // Create a separate array for each department
          const employeeDetailsArray = await Promise.all(
            employeeIds.map(async (employeeId) => {
              try {
                await dispatch(getuserdetails(employeeId));
                return userDetails;
              } catch (error) {
                console.error('Error fetching user details:', error);
                return null;
              }
            })
          );
  
          details[department._id] = employeeDetailsArray;
        }
  
        setEmployeeDetails(details);
      }
    };
  
    fetchEmployeeDetails();
  }, [departments, dispatch]);
  

  const columns = [
    {
      name: 'Name',
      selector: 'name',
      sortable: true,
    },
    {
      name: 'Manager id',
      selector: 'manager',
      sortable: true,
    },
    {
      name: 'Actions',
      cell: (row) => (
        <div>
          <button
            className={User.data.user.role !== 'manager' ? 'btn btn-info btn-sm mx-3 d-none' : 'btn btn-info btn-sm mx-3'}
            onClick={() => setclickedRow(row)}
            data-bs-toggle="modal"
            data-bs-target="#updatedDep"
          >
            Update
          </button>
          <button
            className={User.data.user.role !== 'manager' ? 'btn btn-info btn-sm mx-3 d-none' : 'btn btn-danger btn-sm mx-3'}
            onClick={() => setclickedRow(row)}
            data-bs-toggle="modal"
            data-bs-target="#deleteDepModel"
            
          >
            Delete
          </button>
          <button
            className={
              User.data.user.role !== 'manager' ? 'btn btn-info btn-sm mx-3 d-none' : 'btn btn-success btn-sm mx-3'
            }
            onClick={() => {
              setclickedRow(row);
            }}
            data-bs-toggle="modal"
            data-bs-target="#assignDep"
          >
            Assign
          </button>
        </div>
      ),
    },
  ];
 console.log("employeeDetails",employeeDetails)
  const handleUpdate = (employee) => {
    // Add logic for handling update, e.g., opening a modal with a form
  };

  const handleDelete = (employee) => {
    // Add logic for handling delete, e.g., showing a confirmation modal
  };

  const expandableRow = (row) => {
    console.log(row)
    const departmentId = row?.data?._id;
    const departmentEmployees = employeeDetails[departmentId] || [];
    console.log("departmentEmployees",departmentEmployees)
    if (departmentEmployees.length > 0) {
      const columns = [
        {
          name: 'Name',
          selector: 'name',
          sortable: true,
        },
        {
          name: 'Location',
          selector: 'location',
          sortable: true,
        },
        {
          name: 'Role',
          selector: 'role',
          sortable: true,
        },
      ];
  
      return (
        <>
          <DataTable columns={columns} data={departmentEmployees||[]} noHeader dense striped highlightOnHover />
        </>
      );
    } else {
      return <div>No items found.</div>;
    }
  };
  
  

  return (
    <div className={`content ${isSidebarOpen ? 'open' : ''}`}>
      <CreateDepartmentModal />
      <AssignDepartmentModal clickedRow={clickedRow} />
      <UpdateDepartmentModal />
      <DeleteDepartmentModal/>
      <h1 className={User?.data?.user?.role !== 'manager' ? 'title d-none' : 'title'}>
        Departments{' '}
        <FaPlusCircle data-bs-toggle="modal" data-bs-target="#createDepartmentModal" />
      </h1>
      <DataTable
        columns={columns}
        data={departments || []}
        pagination
        expandableRows
        expandableRowsComponent={expandableRow}
        highlightOnHover
        defaultSortField="name"
      />
    </div>
  );
};

export default Departments;
