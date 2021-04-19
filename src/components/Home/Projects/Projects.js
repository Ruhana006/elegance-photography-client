import React from 'react';
import wedding from "../../../images/weddingProject.jpg"
import birthday from '../../../images/birthdayProject.jpg'
import bagBrand from '../../../images/bagBranding.jpg'
import ProjectDetail from '../ProjectDetail/ProjectDetail';
const projectData = [
    {
        title: 'Wedding photoshoot in India',
        image: wedding
},
    {
       title: 'Birthday photoshoot',
       image: birthday
    },
    {
        title:'Leather Bags Branding',
        image: bagBrand
    }
]
const Projects = () => {
    return (
        <section id="projects" className="project-container">
            <div  className="text-center ">
                <h1>Our Recent <span style={{color:'rgb(233, 211, 12)'}}>Projects</span></h1>
            </div>
            <div className="container-fluid d-md-flex justify-content-md-center align-items-md-center">
            <div className="row mt-5">
                {
                    projectData.map(project => <ProjectDetail project ={project} key={project.title}></ProjectDetail>)
                }
            </div>
            </div>
        </section>
    );
};

export default Projects;