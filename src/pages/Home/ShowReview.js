import React, { useEffect, useState } from 'react';
import Review from './Review';

const ShowReview = () => {

    const [reviews, setreviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setreviews(data));
    }, []);
    return (
        <div>
            <h3 className='text-primary text-5xl text-center font-bold mb-4'>Our Reviews</h3>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
                {/* {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                } */}
            </div>
        </div>
    );
};

export default ShowReview;