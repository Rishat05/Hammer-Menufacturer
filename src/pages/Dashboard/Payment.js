import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import CheckOut from "./CheckOut";

const queryClient = new QueryClient();
const Payment = () => {
    const { id } = useParams();
    const stripePromise = loadStripe('pk_test_51L52iAHqq9NKezDu9BiIFnpHBgMlm17FFgT1nZ0dSjnrxn2xfDrbnbb542Dsfr4zG65KatWUqW4bymA82OrNWTyN00RFQ4mVAe');

    const url = `https://dry-earth-97304.herokuapp.com/booking/${id}`;
    const {
        data: order,
        isLoading,
        refetch,
    } = useQuery(["order", id], () => fetch(url, {
        method: 'GET',
        mode: "no-cors",
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then((res) => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div className="mx-auto flex flex-col justify-center items-center w-3/4">
            <div className="card w-full max-w-md bg-base-100 shadow-xl my-12">
                <div className="card-body">
                    <p className="text-accent font-bold">
                        <b>Name : </b> {order?.userName}
                    </p>
                    <h2 className="card-title">Please Pay for { }</h2>
                    <p>
                        Product Name:{" "}
                        <span className="text-orange-700">{order?.productName}</span>
                    </p>
                    <p>Please pay: ${order?.quantity} x ${order?.price} = ${order?.quantity * order?.price}</p>
                </div >
            </div >
            <div className="card w-full max-w-md shadow-2xl bg-base-100" >
                <div className="card-body" >
                    <Elements stripe={stripePromise}>
                        <CheckOut order={order} cost={order?.quantity * order?.price} />
                    </Elements>
                </div >
            </div >
        </div >
    );
};

// export default Payment;
export default function Wraped() {
    return (<QueryClientProvider client={queryClient}>
        <Payment />
    </QueryClientProvider>
    );

}
