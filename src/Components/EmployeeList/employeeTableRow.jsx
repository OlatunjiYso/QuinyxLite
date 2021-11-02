import React from 'react';
import { Link } from "react-router-dom";

import './employeeTableRow.css';
import manProfilePicture from '../Images/man-avatar.jpeg';
import womanProfilePicture from '../Images/woman-avatar.jpeg';
import { FaEye, FaEdit } from "react-icons/fa";

const EmployeeTableRow = ({ employee, count }) => {
      const { fullName, employment, joined, department, gender, id } = employee;
        let profilePicture;
      if(gender ==='Male') profilePicture = manProfilePicture;
      if(gender ==='Female') profilePicture = womanProfilePicture
    return (
        <tr className="emp-table-row">
            <td>{count}</td>
            <td>
                <span 
                className="emp-row-avatar"
                style={{backgroundImage: "url(" + profilePicture + ")", backgroundSize:'cover', backgroundPosition: 'center'}}
                >
                </span>
                {fullName}
            </td>
            <td>{department}</td>
            <td>{gender}</td>
            <td>{joined}</td>
            <td>{employment}</td>
            <td>
                <span className="table-row-action"> <FaEdit /></span>
                <span className="table-row-action">
                    <Link to={{
                            pathname: "/profile",
                            state: { employeeId: id }
                        }}>
                        <FaEye /> 
                    </Link>
                </span>
            </td>
        </tr>
    )

}


export default EmployeeTableRow;