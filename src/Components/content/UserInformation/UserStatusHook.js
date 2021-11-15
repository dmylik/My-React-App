import React, {useEffect, useState} from 'react'

const  UserStatusHook = (props) =>{
    // useState - локальный state, возвращает массив
    // array[0] - значение (данные)
    // array[1] - функция которая их меняет
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    // переотрисовка (синхронизация состояния) когда изменятся данные в redux-store
    useEffect(()=>{
        setStatus(props.status);
    },[props.status]);

    const activateEditMode =()=>{setEditMode(true)};

    const deactivateEditMode =()=>{
        props.updateStatus(status);
        setEditMode(false);
    };

    const onStatusChange = (e) =>{setStatus(e.currentTarget.value);};



    return <div>
            {!editMode
                ?<div>
                <span onDoubleClick={activateEditMode}>
                    {status || "__________"}</span>
                </div>
                :<div>
                    <input  onChange={onStatusChange}
                            onBlur={deactivateEditMode}
                            autoFocus={true}
                            value={status} />
                </div>
            }
        </div>
};

export default UserStatusHook