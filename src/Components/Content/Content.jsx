import React from 'react';
import c from './Content.module.css';
import MyPosts from './MyPosts/MyPosts';
import ContentInfo from "./ContentInfo/ContentInfo";


const Content = (props) => {


    return (
        <div className={c.content}>
            <ContentInfo/>
            <MyPosts posts={props.state.posts}
                     newPostText={props.state.newPostText}
                     dispatch={props.dispatch}/>
        </div>
    );
}

export default Content;