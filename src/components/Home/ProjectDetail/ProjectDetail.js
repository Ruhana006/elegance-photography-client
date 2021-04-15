import { Button } from 'react-bootstrap';
import React from 'react';
import { Card } from 'react-bootstrap';

const ProjectDetail = ({ project }) => {
    return (
        <div className="container-fluid col-md-4 col-sm-6 mt-5 mb-5">
            <Card className="card" style={{ width: '352px', height:'500px' }}>
                <Card.Img variant="top" src={project.image} style={{ height: '270px', width: '350px' }} />
                <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, ipsam cum? Libero ex, excepturi nobis modi facilis 
                    </Card.Text>
                    <Button variant="warning">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ProjectDetail;