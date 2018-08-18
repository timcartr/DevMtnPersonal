import React, {Component} from 'react';
import { connect } from 'react-redux'
import axios from 'axios'

import { hideModal } from '../../actions/modal'
import {updateUserData} from '../../../../ducks/reducer'
import Modal from '../../components/Modal'
import './Modals.css'
import { MODAL_TYPE_PAYMENT } from '../../constants/ModalTypes';
import { showModal } from '../../actions/modal'

class UpgradeMembershipModal extends Component {
  state = {
    member_id: this.props.member_id,
    membershipSelection: this.props.membership_level,
    start_date: '',
    end_date: '',
    cost: this.props.cost
  }

  componentDidMount(){
    this.handleDate()
  }

  onClose = () => {
    this.setState({
      membershipSelector: this.props.membership_level
    })

    this.props.hideModal();
    // this.showPaymentModal()
  }

  save = () => {
    axios.put(`/api/updateMembership/${this.props.member_id}`, this.state)
    .then(res=> {
      this.props.updateUserData(res.data[0])
      // this.showPaymentModal()
    })
    this.props.hideModal();
  }

  membershipSelector = (membership, cost) => {
    this.setState({
      membershipSelection: membership,
      cost
    })
  }

  handleCost = (cost) => {
    this.setState({
      cost
    })
  }

  handleDate = () => {
    let startDate = new Date(this.props.start_date)
    let start_date = `${startDate.getFullYear()}-${startDate.getMonth()+1}-${startDate.getDate()}`
    let thirtyDays = `${startDate.getFullYear()}-${startDate.getMonth()+2}-${startDate.getDate()}`

    this.setState({
      start_date: start_date,
      end_date: thirtyDays
    })
  }

  showPaymentModal = () => {
    const member = this.props
    this.props.showModal(MODAL_TYPE_PAYMENT, {
        first_name: member.first_name,
        last_name: member.last_name,
        email: member.email,
        phone: member.phone,
        start_date: member.start_date,
        end_date: member.end_date,
        member_id:member.member_id
    });
  };

  render(){
    console.log('MembershipModal',this.state)
    return (
      <Modal onClose={this.onClose}>
        <div className='modalStyleButton'>
          <h2>Please Select a Membership Level</h2>
          <button 
          className={this.state.membershipSelection === 'Unlimited Access' ? 'selectedButton' : null}
          onClick={() => this.membershipSelector('Unlimited Access',175)}>
            Unlimited Access
          </button>
          <button className={this.state.membershipSelection === 'Vip Access' ? 'selectedButton' : null}
          onClick={() => this.membershipSelector('Vip Access',150)}>
          Vip Access
          </button>
          <button className={this.state.membershipSelection === 'Standard Access' ? 'selectedButton' : null}
          onClick={() => this.membershipSelector('Standard Access',125)}>
          Standard Access</button>
        </div>
        <div className='updateProfileButtons'>
          <button onClick={this.save}>
            Save
          </button>
          <button onClick={this.onClose}>
            Cancel
          </button>
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

export default connect(mapStateToProps, { hideModal,updateUserData, showModal })(UpgradeMembershipModal);
