import React from 'react';
import Preloader from '../../common/preloader/Preloader';
import c from './Profile.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = ({profile,status,updateStatus}) => {
    if (!profile){
        return <Preloader/>
    }
    return (
        <div className={c.content}>
            <div>
            </div>
            <div className={c.descriptionBlock}>
                <img src = {profile.photos.large}/>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    );
}

export default ProfileInfo;