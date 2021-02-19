import React from 'react';
import Preloader from '../../common/preloader/Preloader';
import c from './Profile.module.css';
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {
    if (!props.profile){
        return <Preloader/>
    }
    return (
        <div className={c.content}>
            <div>
            </div>
            <div className={c.descriptionBlock}>
                <img src = {props.profile.photos.large}/>
                <ProfileStatus status="ssad"/>
            </div>
        </div>
    );
}

export default ProfileInfo;