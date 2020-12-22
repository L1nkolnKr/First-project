import React from 'react';
import c from './Content.module.css';

const Content= ()=>{
    return <div className={c.content}>
        <div>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkjIGjG0hLXWH59WpMEd_8zLjyy1VlM_Q7eA&usqp=CAU'></img>
        </div>
        <div>
          ava+description
        </div>
        <div>
          My post
          <div>
            New post
          </div>
        <div className={c.posts}>
          <div className={c.item}>
            Post1
          </div>
          <div className={c.item}>
            Post2
          </div>
        </div>
        </div>
    </div>
}

export default Content;