import React from 'react';
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux';

import { hideModal } from '../../actions/modal';
import Modal from '../../components/Modal';
import './Modals.css'

const EditProfile = ({ title, afterClose, hideModal }) => {
  const onClose = () => {
    hideModal();

    if (afterClose) {
      afterClose();
    }
  };

  return (
    <Modal onClose={onClose}>
      <div className='modalStyle'>
        <h2>Edit Member Information</h2>
        <p>First Name</p>
        <input type="text" placeholder='Peter'/>
        <p>Last Name</p>
        <input type="text" placeholder='Quill'/>
        <p>Phone</p>
        <input type="text" placeholder='801.888.8989'/>
        <p>Email</p>
        <input type="text" placeholder='example@email.com'/>
      </div>
      <div className='updateProfileButtons'>
        <button onClick={onClose}>
          Save
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

export default connect(null, { hideModal })(EditProfile);
