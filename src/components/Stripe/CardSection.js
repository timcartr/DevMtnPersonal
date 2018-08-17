import React from 'react';
import {CardNumberElement, CardExpiryElement, CardCVCElement} from 'react-stripe-elements';

class CardSection extends React.Component {
    state={
        fontSize: '18px',
        fontFamily: 'Overpass, Arial, Helvetica, sans-serif',
        letterSpacing: '2px',
        fontWeight: '200',
        color: '#fff',
        '::placeholder': {
            color: '#fff'
        }
    }
    render() {
        return (
            <div className='stripeInput'>
                <CardNumberElement className='stripeElement' style={{base: this.state}} />
                <div className='stripeFlex'>
                    <CardExpiryElement className='stripeElementHalf' style={{base: this.state}}/>
                    <CardCVCElement className='stripeElementHalf' style={{base: this.state}}/>
                </div>
            </div>
        );
    }
}

export default CardSection;