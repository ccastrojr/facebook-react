import React from 'react';

import UserInfo from './UserInfo';
import Timeline from './Timeline';

function UserTimeLine() {
   return (
      <div className="timeline_container content">
         <UserInfo />
         <Timeline />
      </div>
   )
}

export default UserTimeLine;