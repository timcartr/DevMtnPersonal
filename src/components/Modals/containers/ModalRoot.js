import React from 'react';
import { connect } from 'react-redux';

import Notification from './modals/Notification';
import Confirmation from './modals/Confirmation';
import EditProfile from './modals/EditProfileModal';
import AdminEditProfile from './modals/AdminEditProfileModal';
import UpgradeMembership from './modals/UpgradeMembershipModal';
import DeleteMember from './modals/DeleteMemberModal';

import { 
  MODAL_TYPE_NOTIFICATION, 
  MODAL_TYPE_CONFIRMATION, 
  MODAL_TYPE_EDITPROFILE,
  MODAL_TYPE_ADMINEDITPROFILE,
  MODAL_TYPE_UPGRADEMEMBERSHIP,
  MODAL_TYPE_DELETEMEMBER
} from '../constants/ModalTypes';

const MODAL_COMPONENTS = {
  [MODAL_TYPE_NOTIFICATION]: Notification,
  [MODAL_TYPE_CONFIRMATION]: Confirmation,
  [MODAL_TYPE_EDITPROFILE]: EditProfile,
  [MODAL_TYPE_ADMINEDITPROFILE]: AdminEditProfile,
  [MODAL_TYPE_UPGRADEMEMBERSHIP]: UpgradeMembership,
  [MODAL_TYPE_DELETEMEMBER]: DeleteMember
};

const ModalRoot = ({ type, props }) => {
  if (!type) {
    return null;
  }

  const ModalComponent = MODAL_COMPONENTS[type];
  return <ModalComponent {...props} />;
};

export default connect(state => state.modal)(ModalRoot);
