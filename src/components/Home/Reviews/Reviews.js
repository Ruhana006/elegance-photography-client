import React, { useEffect, useState } from 'react';
import ReviewDetail from '../ReviewDetail/ReviewDetail';

const Reviews = () => {
    const [reviews , setReviews]= useState([])

    useEffect(()=>{
        fetch ('https://boiling-plateau-48449.herokuapp.com/reviews')
        .then(res=>res.json())
        .then(data => {
            setReviews(data)
        })
    })
    return (
        <section className="review-container">
            <div className="text-center ">
               <h1 style={{color:'rgb(233, 211, 12)'}}>Reviews</h1>
            </div>
            <div className="container-fluid d-md-flex justify-content-md-center align-items-md-center">
            <div className="row ">
                {
                  reviews.map(review => <ReviewDetail review={review} key ={review.name}></ReviewDetail>)
                }
            </div>
        </div>
        </section>
    );
};

export default Reviews;