import React, { Component } from 'react';

import PostItem from './PostItem';

class PostList extends Component {
   state = {
      posts: [
         {
            id: 1,
            author: {
               name: 'Jennifer Castro',
               avatar: 'https://i.pravatar.cc/150?img=1'
            },
            date: '18 de Nov. 2019',
            content: 'Pessoal, alguém sabe se a Rocktseat está contratando?',
            comments: [
               {
                  id: 1,
                  author: {
                     name: 'João Filho',
                     avatar: 'https://i.pravatar.cc/150?img=2'
                  },
                  content: 'Acredito que sim, Jennifer.'
               }
            ]
         },
         {
            id: 2,
            author: {
               name: 'Carlos Almeida',
               avatar: 'https://i.pravatar.cc/150?img=3'
            },
            date: '16 de Nov. 2019',
            content: 'E ai, galera. Boa noite!!',
            comments: [
               {
                  id: 1,
                  author: {
                     name: 'Geovana Lopes',
                     avatar: 'https://i.pravatar.cc/150?img=5'
                  },
                  content: 'Boa noite, amigo :)'
               }
            ]
         },
         {
            id: 3,
            author: {
               name: 'Geovana Lopes',
               avatar: 'https://i.pravatar.cc/150?img=5'
            },
            date: '14 de Nov. 2019',
            content: 'Como vão os estudos, galera?',
            comments: [
               {
                  id: 1,
                  author: {
                     name: 'Jhonathan Castro',
                     avatar: 'https://i.pravatar.cc/150?img=8'
                  },
                  content: 'A todo vapor hehe'
               }
            ]
         },
      ]
   }

   render() {
      return (
         <div className="timeline_posts">
            <ul>
               { this.state.posts.map(post =>
                  <PostItem key={post.id} {...post}/>   
               ) }
            </ul>
         </div>
      )
   }
}

export default PostList;