import React from 'react';
import { connect } from 'react-redux';

import { hideModal } from '../../actions/modal';
import Modal from '../../components/Modal';

const Notification = ({ title, afterClose, hideModal }) => {
  const onClose = () => {
    hideModal();

    if (afterClose) {
      afterClose();
    }
  };

  return (
    <Modal title={title} onClose={onClose}>
      <button onClick={onClose}>
        Ok
      </button>
    </Modal>
  );
};

export default connect(null, { hideModal })(Notification);
