
import React from 'react';
import c from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/Content-reducerMyPosts.jsx";



const MyPostsConta = (props) => {
    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);
    let newPostElement=React.createRef();
    let addPost=() =>{
        props.dispatch(addPostActionCreator());

    }
    let onPostChange = () =>{
        let text=newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }
    return (
        <div className={c.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange}/>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div>
                New posts
            </div>
            <div className={c.posts}>
                {postsElements}
            </div>

        </div>
    );
}

export default MyPosts;
