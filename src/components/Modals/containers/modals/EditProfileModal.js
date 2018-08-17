import React, {Component} from 'react';
import { connect } from 'react-redux';
import axios from 'axios'

import { hideModal } from '../../actions/modal';
import {updateUserData} from '../../../../ducks/reducer'
import Modal from '../../components/Modal';
import './Modals.css'

class EditProfile extends Component {
  state = {
    member_id: this.props.reducer.user.member_id,
    first_name: this.props.reducer.user.first_name,
    last_name: this.props.reducer.user.last_name,
    phone: this.props.reducer.user.phone,
    email: this.props.reducer.user.email
  }
  
  onClose = () => {
    this.props.hideModal();
    
    // console.log('Closed')
    // if (props.afterClose) {
      //   afterClose();
      // }
    };
    
  save = () => { 
    axios.put(`/api/updateMember/${this.state.member_id}`, this.state)
    .then(res=> {
      this.props.updateUserData(res.data[0])
    })

    this.props.hideModal();

  }

  handleFirstNameChange = (val) => {
    this.setState({
      first_name: val
    })
  }
  handleLastNameChange = (val) => {
    this.setState({
      last_name: val
    })
  }
  handlePhoneChange = (val) => {
    this.setState({
      phone: val
    })
  }
  handleEmailChange = (val) => {
    this.setState({
      email: val
    })
  }

  render(){
  return (
    <Modal onClose={this.onClose}>
      <div className='modalStyle'>
        <h2>Edit Member Information</h2>
        <div className='modalInput'>
          <p>First Name
          <input type="text" value={this.state.first_name} onChange={e => this.handleFirstNameChange(e.target.value)}/></p>
          <p>Last Name
          <input type="text" value={this.state.last_name} onChange={e => this.handleLastNameChange(e.target.value)}/></p>
          <p>Phone
          <input type="text" value={this.state.phone} onChange={e => this.handlePhoneChange(e.target.value)}/></p>
          <p>Email
          <input type="text" value={this.state.email} onChange={e => this.handleEmailChange(e.target.value)}/></p>
        </div>
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

export default connect(mapStateToProps, { hideModal,updateUserData })(EditProfile);