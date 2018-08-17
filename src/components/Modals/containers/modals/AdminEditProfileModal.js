import React, {Component} from 'react';
import { connect } from 'react-redux'
import axios from 'axios'

import { hideModal } from '../../actions/modal';
import { updateMembersData } from '../../../../ducks/reducer';
import Modal from '../../components/Modal';
import './Modals.css'

class AdminEditProfile extends Component {
  state= {
    first_name: this.props.first_name,
    last_name: this.props.last_name,
    email: this.props.email,
    phone: this.props.phone,
    start_date: this.props.start_date,
    end_date: this.props.end_date,
    member_id:this.props.member_id
  }

  onClose = () => {
    this.props.hideModal();

  };

  save = () => { 
    axios.put(`/api/updateMemberAdmin/${this.state.member_id}`, this.state)
    .then(res=> {
      console.log(res.data)
      // this.props.updateMemberData(res.data[0])
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
  handleStartChange = (val) => {
    this.setState({
      start_date: val
    })
  }
  handleEndChange = (val) => {
    this.setState({
      end_date: val
    })
  }


  render(){
    let startDate = new Date(this.state.start_date);
    let endDate = new Date(this.state.end_date);
    const member = this.state
    return (
      <Modal onClose={this.onClose}>
      <div className='modalStyle'>
        <h2>Edit Member Information</h2>
        <p>First Name</p>
        <input type="text" value={member.first_name} onChange={e => this.handleFirstNameChange(e.target.value)}/>
        <p>Last Name</p>
        <input type="text" value={member.last_name} onChange={e => this.handleLastNameChange(e.target.value)}/>
        <p>Member Since</p>
        <input type="text" value={startDate.toDateString()} onChange={e => this.handleStartChange(e.target.value)}/>
        <p>Membership Expires</p>
        <input type="text" value={endDate.toDateString()} onChange={e => this.handleEndChange(e.target.value)}/>
        <p>Certifications</p>
        <input type="text" value="Certifications"/>
        <p>Phone</p>
        <input type="text" value={member.phone} onChange={e => this.handlePhoneChange(e.target.value)}/>
        <p>Email</p>
        <input type="text" value={member.email} onChange={e => this.handleEmailChange(e.target.value)}/>
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
}

function mapStateToProps(state) {
  return {
    reducer: state.reducer
  }
}

export default connect(mapStateToProps, { hideModal,updateMembersData })(AdminEditProfile);
