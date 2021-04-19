import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement, Elements, useStripe, useElements } from '@stripe/react-stripe-js';
import CartForm from './CartForm';

const stripePromise = loadStripe('pk_test_51Igsa1BcBDW4HuudYtbgLDBbV99piACCzzXdgOnzYW5pYn8bcCGwdAXAjt9Fc2X6X12aKLAiBO7k8Qdf49CR1V5G00Sqc5kMWX');
const Payment = () => {
    return (
        <Elements stripe={stripePromise}>
           <CartForm></CartForm>
        </Elements>
    )
};
export default Payment;




