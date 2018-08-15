import React, {Component} from 'react';
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import axios from 'axios'

import { hideModal } from '../../actions/modal'
import {updateMembersData} from '../../../../ducks/reducer'
import Modal from '../../components/Modal'
import './Modals.css'

class AdminUpgradeMembershipModal extends Component {
  state = {
    membershipSelection: this.props.membership_level
  }

  onClose = () => {
    this.setState({
      membershipSelector: this.props.membership_level
    })

    this.props.hideModal();

  }

  save = () => {
    axios.put(`/api/adminUpdateMembershipLevel/${this.props.member_id}`, {membership_level:this.state.membershipSelection})
    .then(res=> {
      // this.props.updateMembersData(res.data[0])
    })

    this.props.hideModal();
  }

  membershipSelector = (membership) => {
    this.setState({
      membershipSelection: membership
    })
  }

  render(){
    console.log(this.props.member_id)
    return (
      <Modal onClose={this.onClose}>
        <div className='modalStyleButton'>
          <h2>Please Select a Membership Level</h2>
          <button 
          className={this.state.membershipSelection === 'Unlimited Access' ? 'selectedButton' : null}
          onClick={() => this.membershipSelector('Unlimited Access')}>
            Unlimited Access
          </button>
          <button className={this.state.membershipSelection === 'VIP Access' ? 'selectedButton' : null}
          onClick={() => this.membershipSelector('VIP Access')}>
          VIP Access
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

Notification.propTypes = {
  title: PropTypes.string,
  onClose: PropTypes.func
};

function mapStateToProps(state) {
  return {
    reducer: state.reducer
  }
}

export default connect(mapStateToProps, { hideModal,updateMembersData })(AdminUpgradeMembershipModal);
