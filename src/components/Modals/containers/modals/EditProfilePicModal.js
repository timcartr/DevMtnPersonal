import React, {Component} from 'react';
import { connect } from 'react-redux';
import axios from 'axios'

import { hideModal } from '../../actions/modal';
import {updateUserProfilePic} from '../../../../ducks/reducer'
import Modal from '../../components/Modal';
import './Modals.css'

class EditProfilePic extends Component {
  constructor(){
    super()

    this.state = {
      // member_id: this.props,
      // profile_pic: this.props.reducer.user.profile_pic,
      file: '',
      filename: '',
      filetype: '',
      img: ''
    }
    
    this.handlePhoto = this.handlePhoto.bind(this);
    this.sendPhoto = this.sendPhoto.bind(this);
  }
  
  onClose = () => {
    this.props.hideModal();
    };
    
  savePhoto = () => { 
    axios.put(`/api/updatePic/${this.props.reducer.user.member_id}`, {profile_pic:this.state.img})
    .then(res=> {
      console.log(res.data[0].profile_pic)
      this.props.updateUserProfilePic(res.data[0].profile_pic)
    })
    this.props.hideModal();
  }

  handlePhoto(event) {
    const reader = new FileReader();
    const file = event.target.files[0];
    reader.onload = photo => {
      this.setState({
        file: photo.target.result,
        filename: file.name,
        filetype: file.type,
        img: '',
      });
    };
    reader.readAsDataURL(file);
  }
  
  sendPhoto(event) {
    return axios.post('/api/s3', this.state).then(response => {
      this.setState({ img: response.data.Location });
      this.savePhoto()
    });
  }


  render(){
    console.log(this.state)
  return (
    <Modal onClose={this.onClose}>
      <div className='modalStyle'>
        <h2>Update Profile Picture</h2>
        <div className='modalProfilePicUploader'>
          <input type="file" id="real" onChange={this.handlePhoto} />
        </div>
      </div>
      <div className='updateProfileButtons'>
        <button onClick={this.sendPhoto}>
          Upload
        </button>
        <button onClick={this.onClose}>
          Cancel
        </button>
      </div>
    </Modal>
  );
}
};

function mapStateToProps(state) {
  return {
    reducer: state.reducer
  }
}

export default connect(mapStateToProps, { hideModal,updateUserProfilePic })(EditProfilePic);