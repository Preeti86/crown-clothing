import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckButton = ({ price }) => {
    const priveForStripe = price * 100;
    const publishableKey = 'pk_test_51H2dqKLngF7daYxqFaQzLotJQfqdZNs3ln66vN1um4RvSRj54VgYEnicU7v3IBcZCLbBLHczDBgbtxxtKtgM0Iyq00tndnIMNh';

    const onToken = token => {
        console.log(token);
        alert('Payment successful')
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={priveForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckButton;