import React from 'react';

import ProfileHeader from './ProfileHeader';
import UserTimeLine from './UserTimeLine';

function UserProfile() {
   return (
      <div className="profile_content">
         <ProfileHeader />
         <UserTimeLine />
      </div>
   )
}

export default UserProfile;