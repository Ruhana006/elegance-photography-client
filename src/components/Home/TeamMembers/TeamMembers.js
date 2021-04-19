import React from 'react';
import male1 from '../../../images/male1.jpg';
import female from '../../../images/female.jpg';
import male2 from '../../../images/male2.jpg'
import TeamMemberDetail from '../TeamMemberDetail/TeamMemberDetail';
const teamMembers = [
    {
        name : 'Melba Davis',
        job: 'Chief Photographer',
        image : male1
    },
    {
        name:'Tabitha Baldwin',
        job:'Chief Illustrator',
        image: female
    },
    {
        name:'Muriel Spencer',
        job:'Associate Photographer',
        image:male2
    }
]

const TeamMembers = () => {
    return (
        <section id="team">
            <div className="text-center mt-5">
                <h1 >Our <span style={{color:'rgb(233, 211, 12)'}}>Team Members</span></h1>
            </div>
            <div className="container-fluid d-md-flex justify-content-md-center align-items-md-center">
                <div className="row mt-5">
                   {
                       teamMembers.map(member => <TeamMemberDetail member ={member} key={member.name}></TeamMemberDetail>)
                   }
                </div>
            </div>
        </section>
    );
};

export default TeamMembers;