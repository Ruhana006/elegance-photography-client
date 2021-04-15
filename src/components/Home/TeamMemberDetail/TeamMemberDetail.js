import { Button } from 'react-bootstrap';
import React from 'react';
import { Card } from 'react-bootstrap';

const TeamMemberDetail = ({member}) => {
    return (
        <div className="container-fluid col-md-4 col-sm-6 mt-5 mb-5">
            <Card className="card" style={{ width: '352px', height:'570px' }}>
                <Card.Img variant="top" src={member.image} style={{ height: '400px', width: '350px' }} />
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