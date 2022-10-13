import React, {FC} from 'react';
import {IUser} from "../types/types";
import {NavLink} from "react-router-dom";

export interface UserItemProps {
    user:IUser;
    onClick: (user:IUser) => void;
}

const UserItem:FC<UserItemProps> = ({user, onClick}) => {
    return (
        <div>
            <div onClick={()=>onClick(user)} style={{cursor:"pointer",padding: 15, border: '1px solid gray'}}>
                {user.id}. {user.name} проживает в городе {user.address.city} на улице {user.address.street}
            </div>
        </div>
    );
};

export default UserItem;