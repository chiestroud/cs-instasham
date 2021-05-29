import React, { useEffect, useState } from 'react';
import { UsersList } from '../components/instasham-design-system';
import { getUsers } from '../helpers/userHelper';

export default function Browse() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    getUsers().then((data) => setUserList(data));
  }, []);

  return (
    <div>
      <h2>UserList</h2>
      {userList.map((users) => (
        <div key={users.firebaseKey}>
          <UsersList userList={userList} />
        </div>
      ))}
    </div>
  );
}
