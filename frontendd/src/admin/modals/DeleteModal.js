import React, { useContext } from 'react'
import Context from '../../context/Context';
import { useDispatch } from 'react-redux';
import { deleteEmployee } from '../../redux/user/userThunk';

export default function DeleteModal() {
    const { isSidebarOpen, clickedRow, setclickedRow } = useContext(Context);
    const dispatch=useDispatch()
    const deleteitem=()=>{
        dispatch(deleteEmployee(clickedRow?._id))

    }
  return (
    <>
    <div className="modal fade"  tabIndex={-1}  id="deleteModel"  aria-labelledby="deleteModel" aria-hidden="true">
    <div className=" modal-dialog modal-dialog-centered" >
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Confirm Deletion</h5>
          <button type="button" data-bs-dismiss="modal" aria-label="Close" className='close'>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          Are you sure you want to delete {clickedRow?.name}
        </div>
        <div className="modal-footer">
         
          <button type="button" className="btn btn-danger" onClick={deleteitem}>
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
    
    </>
  )
}
