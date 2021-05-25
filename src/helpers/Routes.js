import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Browse from '../views/Browse';
import Create from '../views/CreatePost';
import Edit from '../views/Edit';
import Feed from '../views/Feed';
import Heart from '../views/Heart';
import Login from '../views/Login';
import Profile from '../views/Profile';

export default function Routes({ user }) {
  return (
    <Switch>
      <Route exact path='/' component={() => <Feed />}/>
      <Route path='/login' component={() => <Login />}/>
      <Route path='/browse' component={() => <Browse />}/>
      <Route path='/create' component={() => <Create />}/>
      <Route path='/edit/:id' component={() => <Edit />}/>
      <Route path='/hearts' component={() => <Heart />}/>
      <Route path='/sham/:key' component={() => <Profile user={user} />}/>
      <Route path='/posts/:postid' />
    </Switch>
  );
}

Routes.propTypes = {
  user: PropTypes.any
};
