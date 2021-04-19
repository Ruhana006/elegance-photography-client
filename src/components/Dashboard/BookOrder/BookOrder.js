import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { UserContext } from '../../../App';
import Payment from '../Payment/Payment';
import Sidebar from '../Sidebar/Sidebar';

const BookOrder = () => {
    const { _id } = useParams();
    const [selectedService, setSelectedService] = useState([])
    const [loggedInUser, setLoggedInUser]= useContext(UserContext)

    const history = useHistory()

    useEffect(() => {
        fetch(`https://boiling-plateau-48449.herokuapp.com/services/` + _id)
            .then(res => res.json())
            .then(data => {
                setSelectedService(data[0])
                console.log(data[0])
            })
    }, [])

    const handleBooking =(_id)=>{
        const url = '/bookings'
        history.push(url)

        const serviceName = selectedService.name;
        const servicePrice = selectedService.price;
        console.log(serviceName,servicePrice);

        const newBooking = {...loggedInUser , serviceName,servicePrice}

        fetch('https://boiling-plateau-48449.herokuapp.com/addbooking',{
            method : 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newBooking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }
    return (
        <div>
            <div className="container-fluid row">
                <div className="col-md-2 col-sm-6">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 mt-5">
                    <div className="mx-5 mt-5">
                        <h3>Your Ordered Service : {selectedService.name}</h3>
                        <h5>Your Service Charge : $ {selectedService.price}</h5>
                        <br/>
                        <Payment></Payment>
                        <button onClick={()=>handleBooking()} className="btn btn-outline-dark mt-5">Confirm Your Booking</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BookOrder;