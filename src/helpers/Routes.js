import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Browse from '../views/Browse';
import Edit from '../views/Edit';
import Feed from '../views/Feed';
import Heart from '../views/Heart';
import Login from '../views/Login';
import Profile from '../views/Profile';
import CreatePost from '../views/CreatePost';

export default function Routes({ user, userList }) {
  return (
    <Switch>
      <Route exact path='/' component={() => <Feed />}/>
      <Route path='/login' component={() => <Login />}/>
      <Route path='/browse' component={() => <Browse userList={userList}/>}/>
      <Route path='/create' component={() => <CreatePost user={user} />}/>
      <Route path='/edit/:id' component={() => <Edit />}/>
      <Route path='/hearts' component={() => <Heart />}/>
      <Route path='/sham/:key' component={() => <Profile user={user} />}/>
      <Route path='/posts/:postid' />
    </Switch>
  );
}

Routes.propTypes = {
  user: PropTypes.any,
  userList: PropTypes.array
};
