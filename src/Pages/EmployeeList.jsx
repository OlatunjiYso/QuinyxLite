import React, { useState, useEffect } from 'react';

import EmployeeTable from '../Components/EmployeeList/employeeTable';
import { fetchAllEmployees } from '../Actions/employees';


const EmployeeList = (props)=> {
    const [employees, setEmployees] = useState([]);

    useEffect(()=>{
        const allEmployees = fetchAllEmployees();
        setEmployees(allEmployees)
    }, [])

    return (
        <div>
            <h3 style={{marginBottom: '2rem'}}> All Employees </h3>
            <EmployeeTable employees={employees}/>
        </div>
    )
}

export default EmployeeList;