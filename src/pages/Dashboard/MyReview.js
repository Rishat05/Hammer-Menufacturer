import React from 'react';
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Swal from 'sweetalert2';

const MyReview = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        const addedBy = user.email;
        const review = { ...data, addedBy };
        // console.log(review);
        const url = `https://intense-shelf-07102.herokuapp.com/review`;
        fetch(url, {
            method: 'POST',
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(result => {
                // console.log(result);
                if (result?.acknowledged) {
                    Swal.fire("Good job!", "Review has been added", "success");
                }

            });

        reset();
    }
    return (
        <div className='lg:w-1/2 sm:w-3/4 px-5 mx-auto my-5'>
            <h1 className="text-accent font-bold text-2xl mx-auto mt-5 text-center">
                Add a Review
            </h1>
            <form className='grid grid-cols-1 gap-3 my-3 ' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2 border-2 border-indigo-600 p-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <input className='mb-2 border-2 border-indigo-600 p-2' placeholder='Your messege' {...register("Messege")} />
                <input className='mb-2 border-2 border-indigo-600 p-2' placeholder='Ratings' type="number" {...register("ratings")} />
                <input className='btn btn-primary  mx-auto' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default MyReview;