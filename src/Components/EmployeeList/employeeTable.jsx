import React from 'react';
import Table from 'react-bootstrap/Table';
import EmployeeTableRow from './employeeTableRow';

const EmployeeTable = ({ employees }) => {

    return (
        <>
            <Table striped bordered hover responsive>
                <thead>
                    <tr style={{height: '3rem', textTransform:'uppercase'}}>
                        <th>#</th>
                        <th>Full Name</th>
                        <th>Department</th>
                        <th>Gender</th>
                        <th>Joined</th>
                        <th>Employment</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map((emp, index) => <EmployeeTableRow
                            key={index}
                            employee={emp}
                            count={index + 1}
                        />)
                    }
                </tbody>
            </Table>
        </>
    );
}

export default EmployeeTable;