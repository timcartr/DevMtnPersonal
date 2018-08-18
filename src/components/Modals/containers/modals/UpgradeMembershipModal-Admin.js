import React, {Component} from 'react';
import { connect } from 'react-redux'
import axios from 'axios'

import { hideModal } from '../../actions/modal'
import {updateMembersData} from '../../../../ducks/reducer'
import { showModal } from '../../actions/modal'
import Modal from '../../components/Modal'
import './Modals.css'

class AdminUpgradeMembershipModal extends Component {
  state = {
    membershipSelection: this.props.membership_level,
    start_date: '',
    end_date: '',
    cost:this.props.cost
  }

  componentDidMount(){
    this.handleDate()
  }

  onClose = () => {
    this.setState({
      membershipSelector: this.props.membership_level
    })

    this.props.hideModal();

  }

  save = () => {
    axios.put(`/api/updateMembership/${this.props.member_id}`, this.state)
    .then(res=> {
      // console.log('res',res.data[0])
      this.props.updateMembersData(res.data[0])
    })

    this.props.hideModal();
  }

  membershipSelector = (membership, cost) => {
    this.setState({
      membershipSelection: membership,
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

  render(){
    console.log(this.state)
    return (
      <Modal onClose={this.onClose}>
        <div className='modalStyleButton'>
          <h2>Please Select a Membership Level</h2>
          <button 
          className={this.state.membershipSelection === 'Unlimited Access' ? 'selectedButton' : null}
          onClick={() => this.membershipSelector('Unlimited Access',175)}>
            Unlimited Access
          </button>
          <button className={this.state.membershipSelection === 'VIP Access' ? 'selectedButton' : null}
          onClick={() => this.membershipSelector('VIP Access',150)}>
          VIP Access
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

export default connect(mapStateToProps, { hideModal,updateMembersData, showModal })(AdminUpgradeMembershipModal);
