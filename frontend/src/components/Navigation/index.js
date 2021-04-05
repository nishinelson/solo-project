import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import * as sessionActions from '../../store/session';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const handleClick = () => {
    return dispatch(sessionActions.demoLogin());
  }

  let sessionLinks;
  if (sessionUser) {


    sessionLinks = (
      <>
        <NavLink to={`/groups/${sessionUser.city}/${sessionUser.state}`}>Groups</NavLink>
        <NavLink to={`/events/${sessionUser.city}/${sessionUser.state}`}>Events</NavLink>
        <ProfileButton className='profileButton' user={sessionUser}/>
      </>
    );
  } else {
    sessionLinks = (
      <>
        <NavLink to="/login">Log In</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
        <NavLink to="/demo" onClick={handleClick}>Demo</NavLink>
      </>
    );
  }

  return (
    <div className='navbar'>
      <NavLink className='home' exact to="/">Questup</NavLink>
      {isLoaded && sessionLinks}
    </div>
  );
}

export default Navigation;
