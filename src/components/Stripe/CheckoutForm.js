import React from 'react';
import {injectStripe} from 'react-stripe-elements';
import axios from 'axios'
import {connect} from 'react-redux'

// import AddressSection from './AddressSection';
import CardSection from './CardSection';

class CheckoutForm extends React.Component {
    handleSubmit = (ev) => {
    // We don't want to let default form submission happen here, which would refresh the page.
    ev.preventDefault();
    // console.log('checkout form',this.props)
    // Within the context of `Elements`, this call to createToken knows which Element to
    // tokenize, since there's only one in this group.
    this.props.stripe.createToken({name: 'Jenny Rosen'}).then(({token}) => {
        console.log('Received Stripe token:', token);
        axios.post('/api/payment', { token, amount: 100 } ).then(response => {
        this.props.setBoxNum3()
        });
    });

    // However, this line of code will do the same thing:
    //
    // this.props.stripe.createToken({type: 'card', name: 'Jenny Rosen'});

    // You can also use createSource to create Sources. See our Sources
    // documentation for more: https://stripe.com/docs/stripe-js/reference#stripe-create-source
    //
    // this.props.stripe.createSource({type: 'card', name: 'Jenny Rosen'});
    };

    onToken = (token) => {
    token.card = void 0;
    }

    render() {
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