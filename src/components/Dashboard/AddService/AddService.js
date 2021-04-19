import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import './AddService.css'

const AddService = () => {
    const { register, handleSubmit, errors } = useForm();
    const [imageURL, setImageURL] =useState()
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const onSubmit = data => {
        console.log(data);
        const serviceData = {
            name : data.name,
            price : data.price,
            imageURL : imageURL,
            email : loggedInUser.email
        };

        const url = `https://boiling-plateau-48449.herokuapp.com/addservice`;
        console.log("service data",serviceData);
        fetch(url , {
            method : 'POST',
            headers: {'Content-Type':'application/json'},
            body : JSON.stringify(serviceData)
        })
        .then(res => console.log('server responding', res))
    };

    const handleUpload = e =>{
        console.log(e.target.files[0]);
        const imageData = new FormData();
        imageData.set ('key','41aa0ea53e2b5e8fc67eb6ccb484ab49');
        imageData.append('image',e.target.files[0]);
        console.log('image',e.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',imageData)
        .then(function(response){
            setImageURL(response.data.data.display_url)
            console.log(response.data.data.display_url);
        })
        .catch(function(error){
            console.log(error)
        })

    }
    return (
        <div className="">
            <div className="container-fluid row dashboard-container">
                <div className="col-md-2 col-sm-6">
                    <Sidebar />
                </div>
                <div className="col-md-10 col-sm-6 px-5 py-5 form">
                    <h2>adding services</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label><h4>Add a Service</h4></label>
                        <br/>
                        <input className="form-input" name="name" defaultValue="" ref={register} />
                        <br/>
                         <label><h4>Service Price</h4></label>
                         <br/>
                        <input className="form-input" name="price" ref={register({ required: true })} />
                        <br/>
                        <label><h4>Add an Image/Icon</h4></label>
                        <br/>
                        <input name="exampleRequired" type="file" onChange={handleUpload} ref={register({ required: true })} />
                        <br/>
                        {errors.exampleRequired && <span>This field is required</span>}
                        <br/>
                        <input className="btn submit-btn " type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;