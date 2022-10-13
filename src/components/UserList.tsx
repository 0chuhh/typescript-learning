import React, {FC, PropsWithChildren} from 'react';
import {IUser} from "../types/types";
import UserItem from "./UserItem";
import {useNavigate} from "react-router-dom";

interface UserListProps {
    users: IUser[]
}

const UserList: FC<UserListProps> = ({users}) => {
    const navigate = useNavigate()

    return (
        <div>
            {users.map(user =>
                <UserItem onClick={()=>navigate(user.id)} user={user} key={user.id}/>
            )}
        </div>
    );
};

export default UserList;