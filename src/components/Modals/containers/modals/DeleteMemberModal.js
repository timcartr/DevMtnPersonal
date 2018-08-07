import React from 'react';
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux';

import { hideModal } from '../../actions/modal';
import Modal from '../../components/Modal';
import './Modals.css'

const DeleteMember = ({ title, afterClose, hideModal }) => {
    const onClose = () => {
        hideModal();

        if (afterClose) {
        afterClose();
        }
    };

    return (
        <Modal onClose={onClose}>
        <div className='modalStyle'>
            <h2>Delete Member?</h2>
            <p>Are you sure you want to delete Peter Quill?</p>
            <p>This cannot be undone</p>
            </div>
        <div className='updateProfileButtons'>
            <button onClick={onClose}>
            Delete
            </button>
            <button onClick={onClose}>
            Cancel
            </button>
        </div>
        </Modal>
    );
    };

Notification.propTypes = {
    title: PropTypes.string,
    onClose: PropTypes.func
};

export default connect(null, { hideModal })(DeleteMember);
