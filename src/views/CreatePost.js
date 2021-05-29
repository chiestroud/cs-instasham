import React from 'react';
import PropTypes from 'prop-types';
import InstaForm from './InstaForm';

export default function CreatePost({ user }) {
  return (
    <div>
      <h2>Add a new post</h2>
      <InstaForm user={user}/>
    </div>
  );
}

CreatePost.propTypes = {
  user: PropTypes.any
};
