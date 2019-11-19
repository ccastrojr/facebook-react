import React from 'react';

function ContactItem({ contact }) {
   return (
      <li>
         <img src={contact.avatar}/>
         <span>{contact.name}</span>
      </li>
   )
}

export default ContactItem;