import React from 'react';
import { Link } from 'react-router-dom';

import {FaPoll, FaCalendarCheck, FaBook, FaTree, FaBookOpen, FaRegUser  } from "react-icons/fa"; 
import './menuCard.css';

const MenuCard = ()=> {

    return (
        <div className="menu-card">
            <h4 className="menu-card-title"> SCHEDULAR </h4>
            <ul className="menu-card-list"> 
                <li> <span><FaPoll/></span> Dashboard </li>
                <li> <span><FaRegUser/></span>
                <Link to={{
                            pathname: "/employees"
                        }}>
                        Employees
                    </Link>
                </li>
                <li> <span><FaCalendarCheck/></span>Tasks</li>
                <li> <span><FaBookOpen/></span>Accounts</li>
                <li> <span><FaCalendarCheck/></span>Schedule</li>
                <li> <span><FaTree/></span>Holidays</li>
                <li> <span><FaBook/></span>Trainings</li>
            </ul>
        </div>
    )
}

export default MenuCard