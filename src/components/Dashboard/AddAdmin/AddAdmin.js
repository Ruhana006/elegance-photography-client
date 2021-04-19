import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../Sidebar/Sidebar';


const AddAdmin = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        console.log(data);
        const adminData = {
            name : data.name,
            email : data.email
        };
        const url = `http://localhost:5000/addadmin`;
        console.log("review data",adminData);
        fetch(url , {
            method : 'POST',
            headers: {'Content-Type':'application/json'},
            body : JSON.stringify(adminData)
        })
        .then(res => console.log('server responding', res))
      }

    return (
        <div className="container-fluid row">
            <div className="col-md-2 col-sm-6">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10 col-sm-6 mt-5 px-5 py-5">
            <form onSubmit={handleSubmit(onSubmit)}>
                        <label><h4>Admin Name</h4></label>
                        <br/>
                        <input className="form-input" name="name" defaultValue="" ref={register} />
                        <br/>
                         <label><h4>Email</h4></label>
                         <br/>
                        <input className="form-input"  name="email" ref={register({ required: true })} />
                        <br/>
                        {errors.exampleRequired && <span>This field is required</span>}
                        <br/>
                        <input className="btn submit-btn " type="submit" />
                    </form>
            </div>
        </div>
    );
};

export default AddAdmin;

{/* <form onSubmit={handleMakeAdmin(handleBlur)}>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Admin Name</label>
                        <input onBlur={handleBlur} type="text" class="form-control"  name="name" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Email Address</label>
                        <input onBlur={handleBlur} type="email" class="form-control" name="email" />
                    </div>

                    <button type="submit" class="btn btn-outline-dark">Make Admin</button>
                </form> */}