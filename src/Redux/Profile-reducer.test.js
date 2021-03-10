import profileReducer, { addPostActionCreator, deletePost } from "./Profile-reducer";

let state = {
    posts: [
        { id: 1, message: 'Hi,how are yo', likesCount: 12 },
        { id: 2, message: 'Coll,photo', likesCount: 11 },
        { id: 3, message: 'Coll,photo', likesCount: 11 },
        { id: 4, message: 'Coll,photo', likesCount: 11 }
    ],
};

it('length of posts should be incremented', ()=>{
    let action = addPostActionCreator("Start")
    
    let newState = profileReducer(state,action);
    expect(newState.posts.length).toBe(5) 
})
it('after deleting length of messages should be decrement', ()=>{
    let action = deletePost(1)
    
    let newState = profileReducer(state,action);
    expect(newState.posts.length).toBe(3) 
})