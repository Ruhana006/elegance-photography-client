import { Button } from 'react-bootstrap';
import React from 'react';
import { Card } from 'react-bootstrap';

const TeamMemberDetail = ({member}) => {
    return (
        <div className="col-md-4 col-sm-6 mt-5 mb-5">
            <Card className="card d-flex justify-content-center align-items-center" style={{ width: '352px', height:'570px' }}>
                <Card.Img variant="top" className="image img-fluid" src={member.image} style={{ height: '400px', width: '340px' }} />
                <Card.Body>
                    <Card.Title>{member.name}</Card.Title>
                    <Card.Text>
                        {member.job}
                    </Card.Text>
                    <Button variant="warning">View Full Bio </Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default TeamMemberDetail;