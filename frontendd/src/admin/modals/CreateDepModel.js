import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { toast } from 'react-toastify';
import { createDepartment } from '../../redux/departments/departmentThunk';

export default function CreateDepartmentModal() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const managerDetails=useSelector((state)=>state.fetchsingleuser.fetchsingleuser)
  

  const handleCreateDepartment = () => {
    if (name.trim() === '' || description.trim() === '') {
      return toast.warn('Fill All Fields');
    }

    const body = {
      name: name,
      description: description,
      manager: managerDetails.data.user.id,
    };

    dispatch(createDepartment(body));
    setName('');
    setDescription('');
  };

  return (
    <>
      <div className="modal fade" tabIndex={-1} id="createDepartmentModal" aria-labelledby="createDepartmentModal" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h2>Create Department</h2>
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
                Create Department
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
