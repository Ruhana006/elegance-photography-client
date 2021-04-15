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
        <section>
            <div className="text-center mt-5">
                <h1 style={{color:'black'}}>Our Team Members</h1>
            </div>
            <div className="d-flex justify-content-center">
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