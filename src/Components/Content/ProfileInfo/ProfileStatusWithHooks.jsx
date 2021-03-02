import React, { useState } from 'react';
import c from './Profile.module.css';


const ProfileStatusWithHooks =(props)=> {

    let [editMode, setEditMode]=useState(false);
    let [status, setStatus]=useState(props.status);

    const activateEditMode=()=>{
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        stsetStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
        <div>
                <span onDoubleClick={activateEditMode}>{props.status || "---"}</span>
        </div>
    }

        {editMode&&
        <div>
                <input autoFocus={true} onBlur={deactivateEditMode} onChange={onStatusChange} value={props.status}/>
        </div>
    }
        </div>
    );
}

export default ProfileStatusWithHooks;