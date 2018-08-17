import React from 'react';
import { connect } from 'react-redux';

import { hideModal } from '../../actions/modal';
import Modal from '../../components/Modal';
import './Modals.css'
// import LoginPage from './LoginPage';

const Login = ({ title, afterClose, hideModal }) => {
  const onClose = () => {
    hideModal();

    if (afterClose) {
      afterClose();
    }
  };

  return (
    <Modal onClose={onClose}>
    </Modal>
  );
};

export default connect(null, { hideModal })(Login);
