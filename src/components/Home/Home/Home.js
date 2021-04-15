import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';
import TeamMembers from '../TeamMembers/TeamMembers';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Projects></Projects>
            <TeamMembers></TeamMembers>
            <Footer></Footer>
        </div>
    );
};

export default Home;