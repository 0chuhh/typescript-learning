import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../types/types";
import axios from "axios";
import {useParams, useNavigate} from "react-router-dom";

export interface UserItemPageParams {
}

const UserItemPage:FC = () => {

    const [user, setUser] = useState<IUser | null>(null)
    const {userId} = useParams<string>()
    const navigate = useNavigate()

    useEffect(() => {
        fetchUser()
    }, [])

    async function fetchUser() {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users',{
                params:{
                    id: userId
                }
            })
            setUser(response.data[0])
        } catch (e) {
            alert(e)
        }
    }
    return (
        <div>
           <button onClick={()=>navigate('/users')}>back</button>
           <h1>Страница пользователя {user?.name}</h1>
            <div>
                {user?.email}
            </div>
            <div>
                {user?.address?.city} {user?.address?.street} {user?.address?.zipcode}
            </div>
        </div>
    );
};

export default UserItemPage;