import React, {Component} from 'react';
import { connect } from 'react-redux'
// import axios from 'axios'
import {Elements} from 'react-stripe-elements'

import { hideModal } from '../../actions/modal'
import {updateMembersData} from '../../../../ducks/reducer'
import Modal from '../../components/Modal'
import './Modals.css'
import InjectedCheckoutForm from '../../../Stripe/CheckoutForm'


class PaymentModal extends Component {
    state = {
        membershipSelection: this.props.membership_level
    }

    onClose = () => {
        this.setState({
        membershipSelector: this.props.membership_level
        })
    }

    paymentModalHideModal = () => {
        this.props.hideModal()
    }

    membershipSelector = (membership) => {
        this.setState({
        membershipSelection: membership
        })
    }

    render(){
        console.log(this.props)
        return (
        <Modal onClose={this.onClose}>
            <div className='modalStyleButton'>
            <h2>Please Confirm Payment</h2>
            <div className='signupinput'>
                <Elements>
                    <InjectedCheckoutForm paymentModalHideModal = {this.props.paymentModalHideModal}/>
                </Elements>
            </div>
            </div>
        </Modal>
        );
    }
    };

    function mapStateToProps(state) {
    return {
        reducer: state.reducer
    }
}

export default connect(mapStateToProps, { hideModal,updateMembersData })(PaymentModal);
