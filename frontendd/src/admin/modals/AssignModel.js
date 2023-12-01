import React, { useState, useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DataTable from 'react-data-table-component';
import { toast } from 'react-toastify';

import Context from '../../context/Context';
import { assigneDepartment } from '../../redux/departments/departmentThunk';

export default function AssignDepartmentModal() {
  const dispatch = useDispatch();
  const { isSidebarOpen,clickedRow,setclickedRow } = useContext(Context);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [selectedRows, setSelectedRows] = useState([]);
  const managerDetails = useSelector((state) => state.fetchsingleuser.fetchsingleuser);
  const allEmployees = useSelector((state) => state.fetchuser.fetchuser);
 console.log("clickedrow",clickedRow._id)
  const columns = [
    {
      name: 'Name',
      selector: 'name',
      sortable: true,
    },
    {
      name: 'Employee ID',
      selector: '_id',
      sortable: true,
    },
  ];
console.log(selectedRows)
  const handleSave = () => {
    
    
    // Additional logic for saving the department and assigning employees
    const obj={
        employeeId: selectedRows[0]?._id,
        departmentId: clickedRow?._id
    }
    console.log("obj",obj)
    dispatch(assigneDepartment(obj));

    // Close the modal and reset state
    setName('');
    setDescription('');
    setSelectedRows([]);
  };

  return (
    <>
      <div className="modal fade" tabIndex={-1} id="assignDep" aria-labelledby="assignDep" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h2>Assign Department</h2>
              <button type="button" data-bs-dismiss="modal" aria-label="Close" className="close" onClick={() => { setName(''); setDescription(''); setSelectedRows([]); }}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div className="modal-body">
              
              <div className="mb-3">
                <DataTable
                  columns={columns}
                  data={allEmployees||[]}
                  selectableRows
                  selectableRowsSingle
                  onSelectedRowsChange={({ selectedRows }) => setSelectedRows(selectedRows)}
                  selectableRowsHighlight
                  highlightOnHover
                />
              </div>
            </div>

            <div className="modal-footer">
              <button className="btn btn-primary" style={{ backgroundColor: 'gray' }} onClick={handleSave}>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
