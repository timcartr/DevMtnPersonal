import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import './index.css';
import App from './App';
import {unregister} from './registerServiceWorker';
import { Provider } from 'react-redux'
import store from './store'
import {StripeProvider} from 'react-stripe-elements'
import stripe from './components/Stripe/stripeKey';

ReactDOM.render(
<Provider store={store}>
    <StripeProvider apiKey={stripe.pub_key}>
        <App/>
    </StripeProvider>
</Provider>
, document.getElementById('root'));
unregister();
