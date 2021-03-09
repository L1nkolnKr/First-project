import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validator';
import { Textarea } from '../../common/FormsControls/FormsControls';
import c from './MyPosts.module.css';
import Post from './Post/Post';

const maxLength10 = maxLengthCreator(10)

let AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newPostText" component={Textarea} placeholder="Post message" validate={[required, maxLength10]} />

            </div>
            <div>
                <button >Add post</button>
            </div>
        </form>
    )
}

AddNewPostForm = reduxForm({ form: "ProfileAddNewPostForm" })(AddNewPostForm)

const MyPosts = React.memo(props => {
    let postsElements = props.posts.map(p => <Post message={p.message}  key = {p.id} likesCount={p.likesCount}/>);
    let newPostElement=React.createRef();

    let AddPost=(value) =>{
        props.addPost(value.newPostText);

    }
    
    return (
        <div className={c.postsBlock}>
            <AddNewPostForm onSubmit={AddPost}/>
            <h3>My posts</h3>
            
            <div className={c.posts}>
                {postsElements}
            </div>

        </div>
    );
})

export default MyPosts;