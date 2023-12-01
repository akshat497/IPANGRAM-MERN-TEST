import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { toast } from "react-toastify";
import {
  createDepartment,
  updateDepartment,
} from "../../redux/departments/departmentThunk";
import Context from "../../context/Context";
import { updateEmployee } from "../../redux/user/userThunk";

export default function UserUpdateModal() {
  const dispatch = useDispatch();
  const { isSidebarOpen, clickedRow, setclickedRow } = useContext(Context);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setphone] = useState("");
  const managerDetails = useSelector(
    (state) => state.fetchsingleuser.fetchsingleuser
  );

  useEffect(() => {
    setName(clickedRow?.name);
    setLocation(clickedRow?.location);
    setphone(clickedRow?.phone);
  }, [clickedRow]);
  console.log(clickedRow);
  const handleUpdateUser = () => {
    if (name.trim() === "" || location.trim() === "" || phone.trim() === "") {
      return toast.warn("Fill All Fields");
    }

    const body = {
      name: name,
      location: location,
      phone: phone,
      id: clickedRow?._id,
    };
    
    dispatch(updateEmployee(body));
    setName("");
    setLocation("");
    setphone("");
  };

  return (
    <>
      <div
        className="modal fade"
        tabIndex={-1}
        id="updatedUser"
        aria-labelledby="updatedUser"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h2>Update User</h2>
              <button
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
                className="close"
                onClick={() => {
                  setName("");
                  setLocation("");
                  setphone("");
                }}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
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
                  Location
                </label>
                <input
                  className="form-control"
                  id="description"
                  rows="3"
                  placeholder="Enter location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  Phone
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="description"
                  rows="3"
                  placeholder="Enter phone"
                  value={phone}
                  onChange={(e) => setphone(e.target.value)}
                />
              </div>
            </div>

            <div className="modal-footer">
              <button
                className="btn btn-primary"
                onClick={handleUpdateUser}
                style={{ backgroundColor: "gray" }}
              >
                Update User
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
