import React from 'react';
import c from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Post message={p.message}  key = {p.id} likesCount={p.likesCount}/>);
    let newPostElement=React.createRef();
    let AddPost=() =>{
        props.addPost();

    }
    let onPostChange = () =>{
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }
    return (
        <div className={c.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange}/>
            </div>
            <div>
                <button onClick={AddPost}>Add post</button>
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
