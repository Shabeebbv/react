import React from 'react'
import { Todolist } from './todolist'
import { Addtask } from './Addtask'
import './todo.css'

export const Todoapp = () => {
  return (
    <>
    <div className='container'>
      <div>TODO APP</div>
      <div>
    <Addtask/>
    </div>
    <div className='list'>
    <Todolist/>
      </div>
      </div>
    </>
  )
}
