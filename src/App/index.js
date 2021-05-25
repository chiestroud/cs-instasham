import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppNavbar } from '../components/instasham-design-system';
import './App.scss';
import { getUserByUid } from '../helpers/userHelper';
import Routes from '../helpers/Routes';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userInfoObj = {
          bio: '',
          fullName: authed.displayName,
          profileImage: authed.photoURL,
          uid: authed.uid,
          username: authed.email.split('@')[0]
        };
        setUser(userInfoObj);
        getUserByUid(userInfoObj).then((response) => {
          if (Object.values(response.data).length === 0) {
            console.warn('user needs to be added');
          } else if (user || user === null) {
            setUser(false);
          }
        });
      }
    });
  }, []);

  return (
    <Router>
      <AppNavbar userInfo={{ ...user }} />
      <div className='app-container'>
        <Routes
          user={user}
        />
      </div>
    </Router>
  );
}

export default App;

// import React from 'react';
// import {
//   ProfileInfo,
//   AppNavbar,
//   PostDetailsCard,
//   PostGrid,
//   UsersList
// } from '../components/instasham-design-system';
// import './App.scss';
// import POSTJSON from '../sample_json/posts.json';
// import USERJSON from '../sample_json/users.json';

// function App() {
//   return (
//     <z>
//       <AppNavbar userInfo={{ username: 'asd' }} />
//       <div className='app-container'>
//         <h2>UserList</h2>
//         <UsersList userList={Object.values(USERJSON)} />
//         <h2>ProfileInfo</h2>
//         <ProfileInfo postsCount={10} followerCount={10} followingCount={10} fullName='test' bio='asdasdasdasd' isUser={false} />
//         <h2>PostDetailsCard</h2>
//         <PostDetailsCard postInfo={Object.values(POSTJSON)[0]} />
//         <h2>PostGrid</h2>
//         <PostGrid posts={Object.values(POSTJSON)} />
//       </div>
//     </z>
//   );
// }

// export default App;
