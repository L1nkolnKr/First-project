import React from 'react';
import c from './ContentInfo.module.css';


const ContentInfo = () => {
    return (
        <div className={c.content}>
            <div>
                <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkjIGjG0hLXWH59WpMEd_8zLjyy1VlM_Q7eA&usqp=CAU'></img>
            </div>
            <div className={c.descriptionBlock}>
                ava+description
            </div>
        </div>
    );
}

export default ContentInfo;