import { NavLink } from "react-router-dom";

import { FaPen, FaTrash } from "react-icons/fa";

import Swal from "sweetalert2";


export function ActionButtons(props){

    const showConfirm = (ev) => {
        ev.preventDefault();
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              props.onDelete(props.id, props.delIndex)
            }
          })
    }

    return (
       <>
          <NavLink to="/" className="btn btn-sm btn-info btn-circle">
             <FaPen></FaPen>
          </NavLink>
          <NavLink to="/" onClick={showConfirm} className="btn btn-sm btn-danger btn-circle">
             <FaTrash></FaTrash>
          </NavLink>
       </>
    );
}