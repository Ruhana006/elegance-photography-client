import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Bookings from '../Bookings/Bookings';

const Dashboard = () => {
    const [admins,setAdmins] = useState([])

    useEffect(()=>{   
        fetch('http://localhost:5000/admins')
        .then(res=>res.json())
        .then(data => setAdmins(data))
     },[])

    return (
        <div>
            <div className="container-fluid">
            <Bookings ></Bookings>
            </div>
        </div>
    );
};

export default Dashboard;