
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
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
};
const dialogsReducer = (state = initialState,action) => {
    switch (action.type) {
        case SEND_MESSAGE :
            let body = action.newMessageBody;
            return {
                ...state,
                messages:[...state.messages, {id: 3, message: body}]
            };

        default :
            return state;
    }
}
export const sendMessageCreator = (newMessageBody) => ({type : SEND_MESSAGE, newMessageBody})


export default dialogsReducer