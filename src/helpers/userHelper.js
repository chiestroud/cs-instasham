import axios from 'axios';
import firebase from 'firebase';
import firebaseConfig from './firebaseHelper';

const dbUrl = firebaseConfig.databaseURL;

const getCurrentUsersUid = () => firebase.auth().currentUser?.uid;

const getUserByUid = (uid) => new Promise((resolve, reject) => {
  // TODO: Get single user ingo based on uid
  axios.get(`${dbUrl}/users.json?orderBy="uid"&equalTo="${uid}"`)
    .then(() => {
      const currentUserInfo = { uid };
      resolve(currentUserInfo);
    }).catch((error) => reject(error));
});

export {
  getUserByUid,
  getCurrentUsersUid
};

// import firebase from 'firebase';

// const getCurrentUsersUid = () => firebase.auth().currentUser?.uid;

// const getUserByUid = (uid) => new Promise((resolve) => {
//   // TODO: Get single user ingo based on uid
//   const currentUserInfo = { uid };
//   resolve(currentUserInfo);
// });

// export {
//   getUserByUid,
//   getCurrentUsersUid
// };
