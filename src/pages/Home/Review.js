import React from 'react';

const Review = (props) => {

    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="card-title">{props.review?.name}</h2>
                <p>{props.review?.Messege}</p>
                <p>Ratings:{props.review?.ratings}</p>
            </div>

        </div>
    );
};

export default Review;