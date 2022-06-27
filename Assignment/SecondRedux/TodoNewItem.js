import { Button, Input } from '@mui/material'
import React, { useState } from 'react'
import { Row,Col } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { updatetodo,deletetodo } from './TodoNewActions'
const TodoNewItem = ({todo}) => {
    const [editable,setEditable] = useState(false)
    const [name,setName]= useState(todo.name)
    let dispatch= useDispatch()
  return (
    <>
      <Row  style ={{color:"green",padding:"20px"}}> # { todo.id.length > 1 ? todo.id[2] :todo.id }</Row>
    <Col>
    {editable ?
     <Input
      type="text"
      value ={name}
      onChange={(e)=>{ setName(e.target.value)
    }}
    
    />
    :
    <h4 style= {{color:"green"}}>{todo.name}</h4>
}
    </Col>
    
    <Button
      variant="contained"
      color="warning"
      onClick={()=>{dispatch(updatetodo({
          ...todo,
          name:name
      }))
     if(editable){
         setName(todo.name);
     }
     setEditable(!editable);
      }}
      > {editable?"Update":"Edit"}</Button>


    <Row>
     
     <Col>
      <Button variant='contained' color='info' className="btn btn-danger m-2"
                    onClick={() => dispatch(deletetodo(todo.id))}
                >Delete</Button></Col>  
    </Row>
    
    
    </>
  )
}

export default TodoNewItem