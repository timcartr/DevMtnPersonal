import React, {Component} from 'react';
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import axios from 'axios'

import { hideModal } from '../../actions/modal';
import Modal from '../../components/Modal';
import './Modals.css'

class DeleteMemberModal extends Component {
    state= {
        
    }

    onClose = () => {
        this.props.hideModal();

    };

    delete = () => { 
        axios.delete(`/api/deleteMember/${this.props.member_id}`)

        this.props.hideModal();
    }
    render(){
        return (
            <Modal onClose={this.onClose}>
        <div className='modalStyle'>
            <h2>Delete Member?</h2>
            <p>Are you sure you want to delete Peter Quill?</p>
            <p>This cannot be undone</p>
            </div>
        <div className='updateProfileButtons'>
            <button onClick={this.delete}>
            Delete
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

export default connect(null, { hideModal })(DeleteMemberModal);
