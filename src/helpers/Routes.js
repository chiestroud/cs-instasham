import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PostDetailCard from '../components/instasham-design-system/PostDetailsCard';

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={PostDetailCard} />
      </Switch>
    </div>
  );
}
