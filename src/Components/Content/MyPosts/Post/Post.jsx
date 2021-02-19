import React from 'react';
import c from './Post.module.css';


const Post = (props) => {
 
  return (
    <div>
      <div className={c.item}>
      <img src='https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.2.1098768786.1602460800'></img>
      </div>
      {props.message} {props.likesCount}
    </div>
  );
}

export default Post;