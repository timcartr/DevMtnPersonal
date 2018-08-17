import React, {Component} from 'react';
import { connect } from 'react-redux'
import axios from 'axios'

import { hideModal } from '../../actions/modal'
import {updateUserData} from '../../../../ducks/reducer'
import Modal from '../../components/Modal'
import './Modals.css'

class UpgradeMembershipModal extends Component {
  state = {
    membershipSelection: this.props.reducer.user.membership_level
  }

  onClose = () => {
    this.setState({
      membershipSelector: this.props.reducer.user.membership_level
    })

    this.props.hideModal();

  }

  save = () => {
    axios.put(`/api/updateMembership/${this.props.reducer.user.member_id}`, {membership_level:this.state.membershipSelection})
    .then(res=> {
      this.props.updateUserData(res.data[0])
    })

    this.props.hideModal();
  }

  membershipSelector = (membership) => {
    this.setState({
      membershipSelection: membership
    })
  }

  render(){
    return (
      <Modal onClose={this.onClose}>
        <div className='modalStyleButton'>
          <h2>Please Select a Membership Level</h2>
          <button 
          className={this.state.membershipSelection === 'Unlimited Access' ? 'selectedButton' : null}
          onClick={() => this.membershipSelector('Unlimited Access')}>
            Unlimited Access
          </button>
          <button className={this.state.membershipSelection === 'Vip Access' ? 'selectedButton' : null}
          onClick={() => this.membershipSelector('Vip Access')}>
          Vip Access
          </button>
          <button className={this.state.membershipSelection === 'Standard Access' ? 'selectedButton' : null}
          onClick={() => this.membershipSelector('Standard Access')}>
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

export default connect(mapStateToProps, { hideModal,updateUserData })(UpgradeMembershipModal);
