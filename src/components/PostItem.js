import React from 'react';

function HeaderPost({ author, date }) {
   return (
      <div className="post-header">
         <img className="avatar" src={author.avatar} />
         
         <div className="details">
            <span>{author.name}</span>
            <span>{date}</span>
         </div>
      </div>
   );
}

function PostComments({ comments }) {
   return (
      <div className="post-comments">         
         {comments.map(comment => (
            <div key={comment.id} className="comment">
               <img className="avatar" src={comment.author.avatar} />
               <p>
                  <span>{comment.author.name}</span>
                  {comment.content}
               </p>
            </div>
         ))}
      </div>
   );
}

function PostItem({ author, date, content, comments }) {
   console.log(comments)
   return (
      <div className="post">
         <HeaderPost author={author} date={date} />
         <p className="post-content">{content}</p>
         <div className="line-section"></div>
         <PostComments comments={comments} />
      </div>
   );
}

export default PostItem;