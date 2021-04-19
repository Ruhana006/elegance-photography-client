
import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Sidebar from '../Sidebar/Sidebar';

const AddReviews = () => {
  const { register, handleSubmit, errors } = useForm();
  const [imageURL, setImageURL] =useState()

    const onSubmit = data => {
        console.log(data);
        const reviewData = {
            name : data.name,
            from : data.from,
            imageURL : imageURL,
            review : data.review

        };

        const url = `https://boiling-plateau-48449.herokuapp.com/addreview`;
        console.log("review data",reviewData);
        fetch(url , {
            method : 'POST',
            headers: {'Content-Type':'application/json'},
            body : JSON.stringify(reviewData)
        })
        .then(res => console.log('server responding', res))
      }

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
        <div>
            <div className="container-fluid row">
              <div className="col-md-2 col-sm-6">
                  <Sidebar></Sidebar>
              </div>
              <div className="col-md-10 col-sm-6 px-5 py-5">
              <form onSubmit={handleSubmit(onSubmit)}>
                        <label><h4>Your Name</h4></label>
                        <br/>
                        <input className="form-input" name="name" defaultValue="" ref={register} />
                        <br/>
                         <label><h4>From</h4></label>
                         <br/>
                        <input className="form-input"  name="from" ref={register({ required: true })} />
                        <br/>
                        <label><h4>Your Reviews</h4></label>
                        <br/>
                        <input type="description" name="review" className="form-input" ref={register}/>
                        <br/>
                        <label><h4>Upload an Image</h4></label>
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

export default AddReviews;