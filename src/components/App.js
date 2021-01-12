import React from 'react';
import Profile from './Profile/Profile';
import userProfile  from '../user.json';


export default function App () {
  return (
    <>
      <Profile
        avatar={userProfile.avatar}
        name={userProfile.name}
        tag={userProfile.tag}
        location={userProfile.location}
        stats={userProfile.stats}
      />
    </>  
  )
}




