 'use server'

import { revalidateTag } from "next/cache";

 const  createTask = async (prevState,formData) => {
    const title =formData.get('title');
    
    const res = await fetch('http://localhost:3003/tasks',{
        
        method : "POST",
        headers : {
            'Content-Type' : "application/json"
        },
        body : JSON.stringify(
            {
                task : title,
                isDone : false,
                created_at: new Date().toISOString()
            }
        )
    })

    if (res.ok) {
        const data = await res.json();
    } else {
        console.log(res.statusText)
    }

    revalidateTag('tasks')

}

export default createTask;

