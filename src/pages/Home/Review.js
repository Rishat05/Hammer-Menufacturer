import React, { useState } from 'react';
import Rating from 'react-rating';
import { FaStar } from 'react-icons/fa';

const Review = (props) => {


    return (
        <div className="card w-80 bg-base-100 shadow-xl" >
            <div className="card-body" >
                <h2 className="card-title" > {props.review?.name}</h2 >
                <p>{props.review?.Messege}</p>
                <p>Ratings:{props.review?.ratings}</p>

                {/* <Rating onClick={handleRating} ratingValue={props.review?.ratings} /> */}

                <Rating
                    initialRating={props.review?.ratings}
                    emptySymbol={<FaStar style={{ color: "gray" }} />}
                    fullSymbol={<FaStar style={{ color: "goldenrod" }} />}

                    readonly
                />
            </div >

        </div >
    );
};

export default Review;