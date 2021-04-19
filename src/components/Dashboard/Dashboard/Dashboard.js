import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Bookings from '../Bookings/Bookings';

const Dashboard = () => {
    const [admins,setAdmins] = useState([])

    useEffect(()=>{   
        fetch('https://boiling-plateau-48449.herokuapp.com/admins')
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