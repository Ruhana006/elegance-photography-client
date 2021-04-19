import React from 'react';
import { Card } from 'react-bootstrap';

const ReviewDetail = (props) => {
    const { name, from, imageURL, review } = props.review;


    return (
        <div className="col-md-4 col-sm-6 col-12 mt-5 ms-2 g-3 mb-5">
            <Card className="card d-flex justify-content-center align-items-center" style={{ width: '385px', height:'355px',border:'none' }}>
                <Card.Img src={imageURL} className="image img-fluid" style={{ height: '150px', width: '180px',borderRadius:"50%" }} />
                <Card.Body>
                    <Card.Title style={{color: 'rgb(233, 211, 12)'}}><h2>{name}</h2></Card.Title>
                    <Card.Text>
                        <p>{from}</p>
                        <h5 style={{color:'grey'}}>{review}</h5> 
                          
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ReviewDetail;