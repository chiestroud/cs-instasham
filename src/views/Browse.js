import React from 'react';
import { UsersList } from '../components/instasham-design-system';
import USERJSON from '../sample_json/users.json';

export default function Browse() {
  return (
    <div>
      <h2>UserList</h2>
      <UsersList userList={Object.values(USERJSON)} />
    </div>
  );
}
