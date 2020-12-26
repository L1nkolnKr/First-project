import React from 'react';
import c from './Content.module.css';
import MyPosts from './MyPosts/MyPosts';
import ContentInfo from "./ContentInfo/ContentInfo";


const Content = (props) => {


    return (
        <div className>
            <ContentInfo/>
            <MyPosts posts={props.posts}/>
        </div>
    );
}

export default Content;