import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';
import TeamMembers from '../TeamMembers/TeamMembers';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Projects></Projects>
            <Reviews></Reviews>
            <TeamMembers></TeamMembers>
            <Footer></Footer>
        </div>
    );
};

export default Home;