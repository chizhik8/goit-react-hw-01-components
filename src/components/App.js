import React from 'react';

import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';

import userProfile from '../data/user.json';
import statisticalData from '../data/statistical-data.json';
import friends from '../data/friends.json';


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
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
    </>  
  )
}




