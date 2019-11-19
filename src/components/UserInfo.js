import React from 'react';

function UserInfo() {
   return (
      <div className="user_info">
         <h3><div className="icon globe"></div>Apresentação</h3>
         <div className="biography">
            <p>Just a programmer that loves codes and cooffe.</p>
         </div>
         <div className="line-section"></div>
         <div className="user-info-details">
            <p><i className="icon graduate"></i>Estuda Sistemas de Informação em IFMA - Campus Monte Castelo</p>
            <p><i className="icon graduate"></i>Frequentou IFMA - Campus Monte Castelo</p>

            <button>Editar Detalhes</button>

            <ul>
               <li></li>
               <li></li>
               <li></li>
               <li></li>
               <li></li>
               <li></li>
            </ul>

            <button>Editar Destaques</button>
         </div>
      </div>
   )
}

export default UserInfo;