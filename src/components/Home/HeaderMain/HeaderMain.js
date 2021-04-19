import React from 'react';
import "./HeaderMain.css";
import homeBg from "../../../images/homeBg.jpg"
const HeaderMain = () => {
    return (
        <div style={{width:'100%'}} className="container-fluid">
            <div className="row mt-5 mb-5  d-flex justify-content-center align-items-center">
                <div className="col-md-5">
                    <h1 className="display-3"><span style={{color:'rgb(233, 211, 12)'}}>ELLEGANCE</span> Photography</h1>
                    <h5>We Create Memories</h5>
                </div>
                <div className="col-md-7">
                    <img className="img-fluid " src={homeBg} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default HeaderMain;