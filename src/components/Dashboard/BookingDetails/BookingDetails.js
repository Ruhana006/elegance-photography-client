import React from 'react';
import Bookings from '../Bookings/Bookings';
import Sidebar from '../Sidebar/Sidebar';

const BookingDetails = ({bookings}) => {
   
    return (
        <div className="container-fluid mt-5">
            <table className="table">
                    <thead>
                        <tr>
                            <th scope="col" className="table-dark ">Name</th>
                            <th scope="col" className="table-dark ">Email</th>
                            <th scope="col" className="table-dark ">Service Ordered</th>
                            <th scope="col"  className="table-dark ">Charge</th>
                        </tr>
                    </thead>
                    <tbody>   
                        { bookings.map((booking)=>
                            <tr>
                            <td className="table-secondary">{booking.name} </td>
                            <td className="table-warning">{booking.email}</td>
                            <td className="table-secondary">{booking.serviceName}</td>
                            <td className="table-warning">$ {booking.servicePrice}</td>
                        </tr> 
                        )  
                        } 
                    </tbody>
                </table>
        </div>
    );
};

export default BookingDetails;