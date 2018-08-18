import React from 'react';
import {injectStripe} from 'react-stripe-elements';
import axios from 'axios'
import {connect} from 'react-redux'

// import AddressSection from './AddressSection';
import CardSection from './CardSection';

class CheckoutForm extends React.Component {
    handleSubmit = (ev) => {
    ev.preventDefault();
    
    let firstLast = `${this.props.reducer.user.first_name} ${this.props.reducer.user.last_name}`
    this.props.stripe.createToken({name: firstLast}).then(({token}) => {
        console.log('Received Stripe token:', token);
        axios.post('/api/payment', { token, amount: this.props.cost } ).then(response => {
        this.props.setBoxNum3()
        });
    });

    };

    onToken = (token) => {
    token.card = void 0;
    }

    render() {
        console.log(this.props)
        return (
            <form onSubmit={this.handleSubmit}>
                {/* <AddressSection /> */}
                <CardSection />
                <button id='paybutton'>Pay ${this.props.cost}</button>
            </form>
        );
    }
}

function mapStateToProps(state) {
    return {
        reducer: state.reducer
    }
}

export default injectStripe(connect(mapStateToProps)(CheckoutForm));