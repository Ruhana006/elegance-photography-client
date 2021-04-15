import React from 'react';
import "./HeaderMain.css";
import homeBg from "../../../images/homeBg.jpg"
const HeaderMain = () => {
    return (
        <div>
            <img src={homeBg} alt=""/>
            <div className="home-text">
                <h1 className="display-3">We create memories</h1>
                
            </div>
        </div>
    );
};

export default HeaderMain;