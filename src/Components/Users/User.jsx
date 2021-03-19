import React from 'react';
import styles from './users.module.css';
import {NavLink} from "react-router-dom"

let User = ({ user }, followingInProgress, follow, unfollow) => {
    return <div>       
        <span>
                        <div>
            <NavLink to={'/content/' + user.id}>
                <img src={user.photos.small != null ? user.photos.small: ""} className={styles.userPhoto}/>
                            </NavLink>
                        </div>
                        <div>
            {user.followed
                ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => { follow(user.id);}}>Unfollow</button>
                : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => { unfollow(user.id);}}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                <div>{user.name}</div>
                <div>{user.status}</div>
                        </span>
                        <span>
                <div>{"user.location.country"}</div>
                <div>{"user.location.city"}</div>
                        </span>
                    </span>
                </div>}

export default User;