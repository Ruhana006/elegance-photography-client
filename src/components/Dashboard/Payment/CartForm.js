import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';

const CartForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const cardElement = elements.getElement(CardElement);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });
        if (error) {
            console.log('[error]', error);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
        }
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement />
                <br/>
                <button className="btn btn-outline-warning" type="submit" disabled={!stripe}>
                    Make Payment
      </button>
            </form>
        </div>
    );
};

export default CartForm;