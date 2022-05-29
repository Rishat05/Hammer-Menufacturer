import React from 'react';

const Review = (props) => {

    return (
        <div className="card w-96 bg-base-100 shadow-xl" >
            <div className="card-body" >
                <h2 className="card-title" > {props.review?.name}</h2 >
                <p>{props.review?.Messege}</p>
                <p>Ratings:{props.review?.ratings}</p>
            </div >

        </div >
    );
};

export default Review;