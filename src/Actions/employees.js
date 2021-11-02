import { employees } from '../Data/employees';

export const fetchAllEmployees = ()=> (employees);

export const fetchEmployeeById = (employeeId)=> (employees.filter((emp)=> emp.id === employeeId)[0]);