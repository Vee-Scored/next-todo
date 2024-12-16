'use client'
import deleteTask from '@/actions/deleteTask'
import React, { useActionState } from 'react'

const DeleteForm = ({id}) => {
    const [state,formAction,isPending] = useActionState(deleteTask)
  return (
    <form action={formAction}>
        <input type="hidden" name='id' value={id}   />
        <button className={`border px-2  border-red-500 text-red-500 ${isPending ? 'pointer-events-none' : 'pointer-events-auto'}`}>
            {
                isPending ? 'Deleting...' : 'Delete'
            }
        </button>
    </form>
  )
}

export default DeleteForm