import React, {Component} from 'react';
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import axios from 'axios'

import { hideModal } from '../../actions/modal';
import Modal from '../../components/Modal';
import './Modals.css'

class AdminEditProfile extends Component {
  state = {

  }

  onClose = () => {
    hideModal();

  };

  render(){

    return (
      <Modal onClose={this.onClose}>
      <div className='modalStyle'>
        <h2>Edit Member Information</h2>
        <p>First Name</p>
        <input type="text" placeholder='Peter'/>
        <p>Member Since</p>
        <input type="text" placeholder='Quill'/>
        <p>Membership Expires</p>
        <input type="text" placeholder='Quill'/>
        <p>Certifications</p>
        <input type="text" placeholder='Quill'/>
        <p>Last Name</p>
        <input type="text" placeholder='Quill'/>
        <p>Phone</p>
        <input type="text" placeholder='801.888.8989'/>
        <p>Email</p>
        <input type="text" placeholder='example@email.com'/>
      </div>
      <div className='updateProfileButtons'>
        <button onClick={this.onClose}>
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

Notification.propTypes = {
  title: PropTypes.string,
  onClose: PropTypes.func
};

export default connect(null, { hideModal })(AdminEditProfile);
