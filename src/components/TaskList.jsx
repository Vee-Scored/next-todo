'use client'
import React from 'react'
import DeleteForm from './DeleteForm'

const TaskList = ({task:{id,task,isDone,created_at}}) => {
  return (
    <div className='mb-3 border flex justify-between border-white px-3 py-2'>{task}

    <DeleteForm id={id}/>
    </div>
  )
}

export default TaskList