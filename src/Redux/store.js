import contentReducer from "./Content-reducer";
import dialogsReducer from "./Dialogs-reducer";

let store = {
    _state:{
        contentPage:{
            posts:[
                {id:1, message: 'Hi,how are yo',likesCount:12},
                {id:2, message: 'Coll,photo',likesCount:11},
                {id:3, message: 'Coll,photo',likesCount:11},
                {id:4, message: 'Coll,photo',likesCount:11}
            ],
            newPostText:'it-camasutra',

        },
        dialogsPage:{
            messages:[
                {id:1, message:'Hi'},
                {id:2, message:'How are you'},
                {id:3, message:'Hello'},
            ],
            dialogs:[
                {id:1, name:'Sasha'},
                {id:2, name:'Artem'},
                {id:3, name:'Nikita'},
                {id:4, name:'Aleks'},
                {id:5, name:'Nik'},
                {id:6, name:'Kris'},
                {id:7, name:'Valera'}
            ],
            newMessageBody:'',
        }

    },
    _callSubscriber(){
        console.log('vvv')
    },

    getState(){
        return this._state
    },
    subscribe(observer){
        this._callSubscriber = observer;
    },

    dispatch(action){
        this._state.contentPage = contentReducer(this._state.contentPage,action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action);

        this._callSubscriber(this._state);
    },
}





export default store;