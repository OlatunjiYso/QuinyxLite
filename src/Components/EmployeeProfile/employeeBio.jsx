import React from 'react';
import {FaPhone, FaHome, FaEnvelope, FaBirthdayCake } from "react-icons/fa"; 
import './employeeBio.css';

import manProfilePicture from '../Images/man-avatar.jpeg';
import womanProfilePicture from '../Images/woman-avatar.jpeg';


const EmployeeBio = ({employee})=> {
    const { id, department, jobTitle, fullName, phone, email, dateOfBirth, homeAddress, bio, gender } = employee;
    let profilePicture;
    if(gender ==='Male') profilePicture = manProfilePicture;
    if(gender ==='Female') profilePicture = womanProfilePicture
    return (
        <div className="bio-card">
            <div className="bio-card-left">
                <span className="bio-avatar"
                style={{backgroundImage: "url(" + profilePicture + ")", backgroundSize:'cover', backgroundPosition: 'center'}}>

                </span>
                <h5>{jobTitle}</h5>
                <span >Employee ID: {id}</span>
            </div>
            <div className="bio-card-right">
                <h5>{fullName}</h5>
                <span className="bio-card-department">{department} Department</span>
                <p>{bio}</p>
                <div className="bio-card-contact">
                    <div className="bio-card-contact-left">
                        <span><FaPhone /></span>
                        <span> {phone}</span>
                    </div>
                    <div className="bio-card-contact-right">
                        <span> <FaEnvelope /> </span>
                        <span> {email} </span>
                    </div>
                </div>
                <div className="bio-card-contact">
                    <div className="bio-card-contact-left">
                        <span><FaBirthdayCake /></span>
                        <span> {dateOfBirth}</span>
                    </div>
                    <div className="bio-card-contact-right">
                        <span> <FaHome /> </span>
                        <span> {homeAddress} </span>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default EmployeeBio;