import { Button } from 'react-bootstrap';
import React from 'react';
import { Card } from 'react-bootstrap';

const ProjectDetail = ({ project }) => {
    return (
        <div className="col-md-4 col-sm-6 col-12 mt-5 mb-5">
            <Card className="card d-flex justify-content-center align-items-center" style={{ width: '300px', height:'500px' }}>
                <Card.Img variant="top" className="image img-fluid" src={project.image} style={{ height: '250px', width: '295px' }} />
                <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, ipsam cum? Libero ex, excepturi nobis modi facilis 
                    </Card.Text>
                    <Button variant="warning">Know More</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ProjectDetail;