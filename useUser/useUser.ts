import { useEffect, useRef, useState } from 'react';
import { reqResApi } from '../api/reqRes'; // your rest api method
import { ReqResList, User } from '../interfaces/reqRes.interface'; // your interfaces

export const useUSers =()=>{


const [users, setUsers] = useState<User[]>([])
    
    const pagRef = useRef(1)

    useEffect(() => {

        loadUser()


    }, [])

    const loadUser = async () => {
        console.log(pagRef);
        
        try {
            const resp = await reqResApi.get<ReqResList>(`/users`,{
                params:{
                    page:pagRef.current
                }
            })
            if (resp.data.data.length>0) {
                setUsers(resp.data.data)
                pagRef.current++;
            }else{
                alert('No existen mas usuarios')
            }
        
        } catch (error) {
            console.log(error);
        }


    }

    return{
        users,
        loadUser,
        pagRef
    }

}
