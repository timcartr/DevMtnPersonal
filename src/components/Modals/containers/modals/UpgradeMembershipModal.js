import React from 'react';
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux';

import { hideModal } from '../../actions/modal';
import Modal from '../../components/Modal';
import './Modals.css'

const UpgradeMembershipModal = ({ title, afterClose, hideModal }) => {
  const onClose = () => {
    hideModal();

    if (afterClose) {
      afterClose();
    }
  };

  return (
    <Modal onClose={onClose}>
      <div className='modalStyleButton'>
        <h2>Please Select a Membership Level</h2>
        <button>Single Day</button>
        <button>Monthly Membership</button>
        <button>Yearly Membership</button>
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

export default connect(null, { hideModal })(UpgradeMembershipModal);
