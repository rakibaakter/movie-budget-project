import React from 'react';
import ReactDOM from 'react-dom';
import './Actors.css';
import {FaFacebook} from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
const Actors = ({actor}) => {
    const {image, name, age, country, role, salary, fbUrl, twitter} = actor;
    return (
        <div className="card">
            <img src={image} alt="" />
            <h2>{name}</h2>
            <span className='role'>{role}</span>
            <p>
                <a href={fbUrl}><FaFacebook/></a>
                <a href={twitter}><FaTwitter/></a>
            </p>
            <h3>Salary : ${salary}</h3>
            <p>Country {country}</p>
            <p>Age : {age}</p>
            <button className='hire-btn'>Hire</button>
        </div>
    );
};

export default Actors;