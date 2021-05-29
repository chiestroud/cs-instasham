import axios from 'axios';
import firebaseConfig from './firebaseHelper';

const dbUrl = firebaseConfig.databaseURL;

const deletePost = (postId) => new Promise((resolve) => {
  // TODO: Delete Post based on postId
  resolve({ postId });
});

const createPost = (postObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/posts.json`, postObj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/posts/${response.data.name}.json`, body)
        .then((data) => console.warn(data));
    }).catch((err) => reject(err));
});

export {
  deletePost,
  createPost// eslint-disable-line
};
