import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import BookingDetails from '../BookingDetails/BookingDetails';
import Sidebar from '../Sidebar/Sidebar';

const Bookings = () => {
    const [bookings, setBookings] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:5000/bookings')
            .then(res => res.json())
            .then(data => {
                setBookings(data)
                console.log(data)
            })
    }, [])
    return (
        <div>
            <div className="container-fluid row">
                <div className="col-md-2 col-sm-6">
                   <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 mt-5">
                    <h2 style={{textAlign:'center'}}>Bookings : {bookings.length}</h2>
                    {
                    <BookingDetails bookings={bookings}></BookingDetails>
                    }
                </div>
            </div>
        </div>
    );
};

export default Bookings;