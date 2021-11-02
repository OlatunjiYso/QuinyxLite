import React from 'react';

import EmployeeBio from '../Components/EmployeeProfile/employeeBio';
import InfoCard from '../Components/EmployeeProfile/infoCard';
import { fetchEmployeeById } from '../Actions/employees';

import './employeeProfile.css';
import { useState } from 'react';
import { useEffect } from 'react';

const EmployeeProfile = ({location})=> {

    const { employeeId } = location.state;
    
    const [currentEmployee, setCurrentEmployee] = useState({});
    useEffect(()=>{
        const employee = fetchEmployeeById(employeeId);
        setCurrentEmployee(employee);
    }, []);

    if(!employeeId) {
        return (
            <div>
                Please Select an Employee
            </div>
        );
    }
    return (
        <>
            <h3> Employee Profile</h3>
            <div className="emp-profile-layout">
                <div className="emp-profile-main">
                    <EmployeeBio employee={currentEmployee}/>
                </div>
                <div className="emp-profile-side">
                    <InfoCard employee={currentEmployee}/>
                </div>
            </div>
        </>
    );
}

export default EmployeeProfile;