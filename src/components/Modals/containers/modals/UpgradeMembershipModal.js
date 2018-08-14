import React, {Component} from 'react';
import { PropTypes } from 'prop-types'
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
          className={this.state.membershipSelection === 'Daily Membership' ? 'selectedButton' : null}
          onClick={() => this.membershipSelector('Daily Membership')}>
            Single Day
          </button>
          <button className={this.state.membershipSelection === 'Monthly Membership' ? 'selectedButton' : null}
          onClick={() => this.membershipSelector('Monthly Membership')}>
          Monthly Membership
          </button>
          <button className={this.state.membershipSelection === 'Yearly Membership' ? 'selectedButton' : null}
          onClick={() => this.membershipSelector('Yearly Membership')}>
          Yearly Membership</button>
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

export default connect(mapStateToProps, { hideModal,updateUserData })(UpgradeMembershipModal);
