import React from 'react';

import UserProfile from './UserProfile';
import Contacts from './Contacts';

function UserContainer() {
   return (
      <div className="profile_container">
         <UserProfile />
         <Contacts />
      </div>
   );
}

export default UserContainer;