import React from 'react';
import { PropTypes } from 'prop-types'
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
      <h1>Hello</h1>
      {window.open= ('http://localhost3000')}
    </Modal>
  );
};

Notification.propTypes = {
  title: PropTypes.string,
  onClose: PropTypes.func
};

export default connect(null, { hideModal })(Login);
