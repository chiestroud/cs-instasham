import axios from 'axios';
import firebase from 'firebase';
import firebaseConfig from './firebaseHelper';

const dbUrl = firebaseConfig.databaseURL;

const getCurrentUsersUid = () => firebase.auth().currentUser?.uid;

const getUserByUid = (user) => new Promise((resolve, reject) => {
  // TODO: Get single user ingo based on uid
  axios.get(`${dbUrl}/users.json?orderBy="uid"&equalTo="${user.uid}"`)
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

const getUsers = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/users.json`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

const addUser = (user) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/users.json`, user)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/users/${response.data.name}.json`, body)
        .then(() => getUsers().then((usersArray) => resolve(usersArray)));
    }).catch((err) => reject(err));
});

export {
  getUserByUid,
  getCurrentUsersUid,
  getUsers,
  addUser
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
