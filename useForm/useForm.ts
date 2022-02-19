import { useState } from 'react';


const useForm = <T extends Object>(initState: T) => {
 
    const [form, setForm] = useState(initState)


    const onChange = (value: string, name: keyof T)=>{
        
       setForm({
            ...form,
            [name]:value
       })
    }

    return{
        ...form,
        form,
        onChange
    }
}

export default useForm
