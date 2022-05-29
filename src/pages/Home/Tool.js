import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Tool = (props) => {
    const { _id, name, img, description, minimumOrderQuantity, availableQuantity, price } = props.tool;

    const navigate = useNavigate();

    const navigateToItemDetail = id => {
        navigate(`/tools/${id}`);
    }

    return (
        <div className="card w-80 lg:w-96 bg-base-100 shadow-xl">
            <figure className='h-80 w-80 p-2'>
                <img src={img} alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Name : {name}</h2>
                <p>{description}</p>
                <h5>Minimum-Order-Quantity : {minimumOrderQuantity}</h5>
                <h5>Available-Quantity : {availableQuantity}</h5>
                <h5>Price : {price}</h5>
                <div className="card-actions">

                    <button onClick={() => navigateToItemDetail(_id)} className="btn btn-primary">Order Now</button>
                    {/* <Link to='/purchase'>
                        <button className="btn btn-primary">Order Now</button>
                    </Link> */}


                </div>
            </div>
        </div>
    );
};

export default Tool;