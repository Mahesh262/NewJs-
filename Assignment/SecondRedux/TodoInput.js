import { Button, Input } from '@mui/material'
import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addtodo } from './TodoNewActions'
 import {v1 as uuid} from 'uuid'
const TodoInput = () => {
    const [name,setName] = useState('')
    let dispatch = useDispatch()
    
  return (
    <>
      <Form>
          <Input
           color="warning"
          type="text" 
          value ={name}
          onChange={(e)=>setName(e.target.value)}
           placeholder='...' required/>
           
      </Form>
      <Button variant='outlined' color="success" onClick={()=>{dispatch(addtodo({
          id:uuid(),
          name:name
      }))
       setName('')
      }} >Add</Button>
    </>
  )
}

export default TodoInput