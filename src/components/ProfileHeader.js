import React from 'react';

import profile from '../assets/profile_me.jpg'

function ProfileHeader() {
   return (
      <div className="profile_header">
         <div className="banner"></div>
         
         <div className="user-details content">
            <img src={profile}></img>
            <h1>Cláudio Coimbra Castro</h1>
         </div>

         <div className="user-actions-bar">
            <div className="content">  
               <ul>
                  <li><span>Linha do Tempo</span></li>
                  <li><span>Sobre</span></li>
                  <li><span>Amigos</span> <small>1.153</small></li>
                  <li><span>Fotos</span></li>
                  <li><span>Mais</span></li>
               </ul>
            </div>
         </div>
      </div>
   );
}

export default ProfileHeader;