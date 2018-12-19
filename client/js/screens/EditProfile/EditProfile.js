import React from "react";
import EditProfileForm from "../../components/EditProfileForm/EditProfileForm";
import PropTypes from "prop-types";

const EditProfile = ({ id, user, navigation }) => {
  return <EditProfileForm user={user} id={id} navigation={navigation} />;
};

export default EditProfile;

EditProfile.propTypes = {
  navigation: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired
};
