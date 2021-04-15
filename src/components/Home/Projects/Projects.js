import React from 'react';
import wedding from "../../../images/weddingProject.jpg"
import birthday from '../../../images/birthdayProject.jpg'
import bagBrand from '../../../images/bagBranding.jpg'
import ProjectDetail from '../ProjectDetail/ProjectDetail';
import './Projects.css'
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
        <section className="project-container">
            <div  className="text-center ">
                <h1 style={{color:'white'}}>Our Recent Projects</h1>
            </div>
            <div className="d-flex justify-content-center">
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