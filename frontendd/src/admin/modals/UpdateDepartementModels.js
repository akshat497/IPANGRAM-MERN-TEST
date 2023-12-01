import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { toast } from 'react-toastify';
import { createDepartment, updateDepartment } from '../../redux/departments/departmentThunk';
import Context from '../../context/Context';

export default function UpdateDepartmentModal() {
  const dispatch = useDispatch();
  const { isSidebarOpen,clickedRow,setclickedRow } = useContext(Context);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const managerDetails=useSelector((state)=>state.fetchsingleuser.fetchsingleuser)
  

  useEffect(()=>{
    setName(clickedRow.name)
    setDescription(clickedRow.description)
  },[clickedRow])
console.log(clickedRow)
  const handleCreateDepartment = () => {
    if (name.trim() === '' || description.trim() === '') {
      return toast.warn('Fill All Fields');
    }

    const body = {
      name: name,
      description: description,
      manager: clickedRow._id,
    };
console.log("body",clickedRow)
    dispatch(updateDepartment(body));
    setName('');
    setDescription('');
  };

  return (
    <>
      <div className="modal fade" tabIndex={-1} id="updatedDep" aria-labelledby="updatedDep" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h2>Update Department</h2>
              <button type="button" data-bs-dismiss="modal" aria-label="Close" className="close" onClick={() => { setName(''); setDescription(''); }}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Department Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter department name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <textarea
                  className="form-control"
                  id="description"
                  rows="3"
                  placeholder="Enter department description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </div>

            <div className="modal-footer">
              <button className="btn btn-primary" onClick={handleCreateDepartment} style={{ backgroundColor: 'gray' }}>
                Update Department
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
