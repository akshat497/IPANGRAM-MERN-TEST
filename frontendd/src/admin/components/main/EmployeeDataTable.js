import React, { useContext, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";
import Context from "../../../context/Context";
import { filterEmployees, filterEmployeesByLocation, updateEmployee } from "../../../redux/user/userThunk";
import UserUpdateModal from "../../modals/UserUpdateModel";
import DeleteModal from "../../modals/DeleteModal";
import { FaSort, FaSortAlphaDown, FaSortAlphaUp } from "react-icons/fa";

const EmployeeDataTable = () => {
  const dispatch = useDispatch();
  const { isSidebarOpen, clickedRow, setclickedRow } = useContext(Context);
const [employees, setemployees] = useState([])
const [direction, setdirection] = useState(1)
  const allEmployees = useSelector((state) => state.fetchuser.fetchuser);
  const filterResponse = useSelector((state) => state.filterByName.filterByName);
  
  const User = useSelector((state) => state.fetchsingleuser.fetchsingleuser);

  useEffect(()=>{
    if(allEmployees!==null){
        setemployees(allEmployees)
    }
  },[allEmployees])
  const sortEmployeesByName=()=>{
    var obj={
        direction:direction?"asc":"desc"
    }
    dispatch(filterEmployees(obj))
    setdirection(!direction)
  }
  const sortEmployeesByLocation=()=>{
    var obj={
        direction:direction?"asc":"desc"
    }
    dispatch(filterEmployeesByLocation(obj))
    setdirection(!direction)
  }
  useEffect(()=>{
    if(filterResponse?.success===true){
        setemployees(filterResponse?.data)
    }
  },[filterResponse])
  console.log(User);
  const columns = [
    {
        name: (
          <div style={{ display: "flex", alignItems: "center" }}>
            Name
            <div
              className="sort-icon"
              onClick={(row) => sortEmployeesByName(row)} // Dispatch your sort action here
            >
           <FaSort />{direction?<FaSortAlphaDown/>:<FaSortAlphaUp/>}
            </div>
          </div>
        ),
        selector: "name",
      },
    {
      name: (<div style={{ display: "flex", alignItems: "center" }}>
        Location
        <div
           className="sort-icon"
              onClick={(row) => sortEmployeesByLocation(row)}
        >
             <FaSort />{direction?<FaSortAlphaDown/>:<FaSortAlphaUp/>}
        </div>
      </div>),
      selector: "location",
      
    },
    {
      name: "Phone",
      selector: "phone",
      
    },
    {
      name: "Actions",
      cell: (row) => (
        <div>
          <button
            className={
              User?.data?.user?.role !== "manager"
                ? "btn btn-info btn-sm mx-3 d-none"
                : "btn btn-info btn-sm mx-3"
            }
            onClick={() => setclickedRow(row)}
            data-bs-toggle="modal"
            data-bs-target="#updatedUser"
          >
            Update
          </button>
          <button
            className={
              User?.data?.user?.role !== "manager"
                ? "btn btn-danger btn-sm mx-3 d-none"
                : "btn btn-danger btn-sm mx-3"
            }
            onClick={() => setclickedRow(row)}
            data-bs-toggle="modal"
            data-bs-target="#deleteModel"
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className={`content ${isSidebarOpen ? "open" : ""}`}>
      <UserUpdateModal />
      <DeleteModal/>
      <h1 className="mb-5"> Employees</h1>
      <DataTable
        columns={columns}
        data={employees || []}
        pagination
        highlightOnHover
        defaultSortField="name"
      />
    </div>
  );
};

export default EmployeeDataTable;
