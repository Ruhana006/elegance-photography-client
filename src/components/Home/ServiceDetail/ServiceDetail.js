import { Button } from 'react-bootstrap';
import React from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './ServiceDetail.css';

const ServiceDetail = (props) => {
    // console.log(props)
    const {name , price , imageURL,_id} = props.service;

    const history = useHistory();

    const handleBookNow = (_id)=>{
        const url = `/services/${_id}`
        history.push(url)
    }
    
    return (
        <div className=" col-md-4 col-sm-6 col-12 mt-5 mb-5">
            <Card className="card d-flex justify-content-center align-items-center" style={{ width: '300px', height:'450px' }}>
                <Card.Img className="image img-fluid" variant="top" src={imageURL} style={{ height: '250px', width: '300px',padding:'10px 10px' }} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {price}
                    </Card.Text>
                    <Button onClick={()=> handleBookNow(_id)} variant="warning">Book Now</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ServiceDetail;