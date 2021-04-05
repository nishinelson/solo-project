import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {


    sessionLinks = (
      <>
        <NavLink to={`/groups/${sessionUser.city}/${sessionUser.state}`}>Groups</NavLink>
        <NavLink to={`/events/${sessionUser.city}/${sessionUser.state}`}>Events</NavLink>
        <ProfileButton user={sessionUser}/>
      </>
    );
  } else {
    sessionLinks = (
      <>
        <NavLink to="/login">Log In</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <div className='navbar'>
      <NavLink exact to="/">Questup</NavLink>
      {isLoaded && sessionLinks}
    </div>
  );
}

export default Navigation;
