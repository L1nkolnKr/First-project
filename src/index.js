import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';


let posts = [
    {id:1, message: 'Hi,how are yo',likesCount:12},
    {id:2, message: 'Coll,photo',likesCount:11},
    {id:3, message: 'Coll,photo',likesCount:11},
    {id:4, message: 'Coll,photo',likesCount:11}
]
let dialogs = [
    {id:1, name:'Sasha'},
    {id:2, name:'Artem'},
    {id:3, name:'Nikita'},
    {id:4, name:'Aleks'},
    {id:5, name:'Nik'},
    {id:6, name:'Kris'},
    {id:7, name:'Valera'}
]
let messages = [
    {id:1, message:'Hi'},
    {id:2, message:'How are you'},
    {id:3, message:'Hello'},
]
ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
