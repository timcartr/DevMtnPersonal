import React, {Component} from 'react';
// import { PropTypes } from 'prop-types'
import { connect } from 'react-redux';
import axios from 'axios'

import { hideModal } from '../../actions/modal';
import {updateUserData} from '../../../../ducks/reducer'
import Modal from '../../components/Modal';
import './Modals.css'

class EditProfile extends Component {
    state = {
        phone: ''
    }
    
    onClose = () => {
        this.props.hideModal();
        
        // console.log('Closed')
        // if (props.afterClose) {
        //   afterClose();
        // }
        };
        
    save = () => { 
        axios.put(`/api/updateMemberPhone/${this.props.reducer.user.member_id}`, {phone:this.state.phone})
        .then(res=> {
        this.props.updateUserData(res.data[0])
        })

        this.props.hideModal();

    }

    handlePhoneChange = (val) => {
        this.setState({
        phone: val
        })
    }

    render(){
    return (
        <Modal onClose={this.onClose}>
        <div className='modalStyle'>
            <h2>Welcome!</h2>
            <h3>We noticed you don't have a phone number listed. Please update it below.</h3>
            <p>Phone
            <input type="text" value={this.state.phone} onChange={e => this.handlePhoneChange(e.target.value)}/></p>
        
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

    // Notification.propTypes = {
    //   title: PropTypes.string,
    //   onClose: PropTypes.func
    // };

    function mapStateToProps(state) {
    return {
        reducer: state.reducer
    }
    }

export default connect(mapStateToProps, { hideModal,updateUserData })(EditProfile);