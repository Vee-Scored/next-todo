'use server'
import fetchTasks from '@/actions/fetchTask'
import React from 'react'
import TaskList from './TaskList'



const TaskLIstContainer = async () => {
  const tasks = await fetchTasks('http://localhost:3003/tasks')
  
  return (
    <div>
        {
           tasks?.map( task => <TaskList key={task.id} task={task} />)
        }
    </div>
  )
}

export default TaskLIstContainer