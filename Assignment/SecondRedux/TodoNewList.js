import React from 'react'
import { useSelector } from 'react-redux'
import TodoNewItem from './TodoNewItem'
const TodoNewList = () => {
    let Newcurd = useSelector(state=>state)
  return (
    <>
       {Newcurd.map((todos,index)=>{
           return <TodoNewItem key={index} todo={todos}/>
       })}

    </>
  )
}

export default TodoNewList