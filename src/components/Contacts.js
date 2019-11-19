import React, { Component } from 'react';

import ContactItem from './ContactItem';

class Contacts extends Component {
   state = {
      contacts: [
         {
            name: 'Jennifer Castro',
            avatar: 'https://i.pravatar.cc/150?img=1'
         },
         {
            name: 'João Filho',
            avatar: 'https://i.pravatar.cc/150?img=2'
         },
         {
            name: 'Carlos Almeida',
            avatar: 'https://i.pravatar.cc/150?img=3'
         },
         {
            name: 'Junior Cardoso',
            avatar: 'https://i.pravatar.cc/150?img=4'
         },
         {
            name: 'Geovana Lopes',
            avatar: 'https://i.pravatar.cc/150?img=5'
         },
         {
            name: 'Alberto Milton',
            avatar: 'https://i.pravatar.cc/150?img=6'
         },
         {
            name: 'Carlos Augusto',
            avatar: 'https://i.pravatar.cc/150?img=7'
         },
         {
            name: 'Jhonathan Castro',
            avatar: 'https://i.pravatar.cc/150?img=8'
         },
         {
            name: 'Simone Almeida',
            avatar: 'https://i.pravatar.cc/150?img=9'
         },
         {
            name: 'Milena Coimbra',
            avatar: 'https://i.pravatar.cc/150?img=10'
         },
         {
            name: 'Cristian Patrese',
            avatar: 'https://i.pravatar.cc/150?img=11'
         },
         {
            name: 'Carlos Fernandes',
            avatar: 'https://i.pravatar.cc/150?img=12'
         },
         {
            name: 'Rogério Vieira',
            avatar: 'https://i.pravatar.cc/150?img=13'
         },
         {
            name: 'Augusto Freitas',
            avatar: 'https://i.pravatar.cc/150?img=14'
         },
         {
            name: 'Thais Ferreira',
            avatar: 'https://i.pravatar.cc/150?img=15'
         },
         {
            name: 'Cinthya Almeida',
            avatar: 'https://i.pravatar.cc/150?img=16'
         },
         {
            name: 'Junior Lima',
            avatar: 'https://i.pravatar.cc/150?img=17'
         },
         {
            name: 'Alberto Torres',
            avatar: 'https://i.pravatar.cc/150?img=18'
         },
         {
            name: 'Natasha Onofre',
            avatar: 'https://i.pravatar.cc/150?img=19'
         },
         {
            name: 'Rafaela Bonfim',
            avatar: 'https://i.pravatar.cc/150?img=20'
         },
         {
            name: 'Gabrielle Dias',
            avatar: 'https://i.pravatar.cc/150?img=21'
         },
         {
            name: 'Marcos Cristiano',
            avatar: 'https://i.pravatar.cc/150?img=22'
         },
         {
            name: 'Thais Araújo',
            avatar: 'https://i.pravatar.cc/150?img=23'
         },
         {
            name: 'Sem Criatividade',
            avatar: 'https://i.pravatar.cc/150?img=24'
         },
      ]
   }

   render() {
      return (
         <div className="contacts">
            <span>Contatos</span>
            <ul>
               {
                  this.state.contacts.map(contact => 
                     <ContactItem 
                        key={contact.name}
                        contact={contact}
                     />
                  )
               }
            </ul>
         </div>
      );
   }
}

export default Contacts;