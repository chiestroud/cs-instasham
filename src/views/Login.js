import React from 'react';
import { Button } from 'reactstrap';
import { signInUser } from '../helpers/auth';

export default function Login() {
  return (
    <div>
      <Button onClick={signInUser}>Google Login</Button>
    </div>
  );
}
