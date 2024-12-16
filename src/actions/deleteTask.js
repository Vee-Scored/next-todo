'use server'

import { revalidateTag } from "next/cache";

const deleteTask =  async (currentState,formData) => {
    const id = formData.get('id');
    const res = await fetch('http://localhost:3003/tasks/'+id,{
        method : "DELETE"
    })
    console.log(res)

    if (res.ok) {
        console.log(res.statusText)
    } else {
        console.log(res.statusText)
    }

    revalidateTag('tasks')
}

export default deleteTask;