'use client'

import createTask from '@/actions/createTask'
import React, { useActionState } from 'react'

const CreateTaskForm = () => {
  const [state,formAction,isPending] = useActionState(createTask)
  return (
    <div className="my-3  flex items-center  ">
      <form action={formAction}>
        <input className="grow text-black py-2 px-1 border" name="title" required />
        <button className={`px-3 py-2 border ${isPending ? 'pointer-events-none' : 'pointer-events-auto'}`}>
          {
            isPending ? "saving..." : "save"
          }
        </button>
      
      </form>
    </div>
  )
}

export default CreateTaskForm