import React from 'react';
import { FaEdit } from "react-icons/fa"; 
import './infoCard.css';

const InfoCard = ({employee})=> {
    const { nationality,religion, maritalStatus, passportNo, emergencyContact } = employee;
    return(
        <div className="info-card">
            <div className="info-card-heading"> 
                <h5> Personal Information</h5>
                <FaEdit />
            </div>
            <div className="info-card-item">
                <h6> Nationality </h6>
                <span> {nationality} </span>
            </div>
            <div className="info-card-item">
                <h6> Religion </h6>
                <span> {religion} </span>
            </div>
            <div className="info-card-item">
                <h6> Marital Status </h6>
                <span> {maritalStatus} </span>
            </div>
            <div className="info-card-item">
                <h6> Passport No. </h6>
                <span> {passportNo} </span>
            </div>
            <div className="info-card-item">
                <h6> Emergency Contact Number </h6>
                <span> {emergencyContact} </span>
            </div>
        </div>
    )
}


export default InfoCard;