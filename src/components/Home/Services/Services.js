import React, { useEffect, useState } from 'react';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const Services = () => {
    const [services , setServices] = useState([])

    useEffect(()=>{
        fetch ('https://boiling-plateau-48449.herokuapp.com/services')
        .then(res=>res.json())
        .then(data => {
            setServices(data)
        })
    })
    return (
        <section id="services" className="service-container">
            <div className="text-center ">
               <h1>Our <span style={{color:'rgb(233, 211, 12)'}}>Services</span></h1>
            </div>
            <div className="container-fluid d-md-flex justify-content-md-center align-items-md-center">
            <div className="row ">
                {
                  services.map(service => <ServiceDetail service={service} key ={service._id}></ServiceDetail>)
                }
            </div>
        </div>
        </section>
    );
};

export default Services;