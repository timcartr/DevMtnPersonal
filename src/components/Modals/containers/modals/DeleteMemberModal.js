import React, {Component} from 'react';
import { connect } from 'react-redux'
import axios from 'axios'

import { hideModal } from '../../actions/modal';
import { createMembersData } from '../../../../ducks/reducer'
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

        axios.get('/api/members').then(res=>{
            this.props.createMembersData(res.data)
        })

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

export default connect(null, { hideModal, createMembersData })(DeleteMemberModal);
