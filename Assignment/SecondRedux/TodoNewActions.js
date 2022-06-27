export const ADD_TODO= "ADD_TODO"; 
export const DELETE_TODO= "DELETE_TODO" 
export const  UPDATE_TODO= "UPDATE_TODO" 

export const addtodo= (todo)=>{
    return{
        type:ADD_TODO,
        payload:todo
    }
}
export const deletetodo= (todoId)=>{
    return{
        type:DELETE_TODO,
        payload:todoId
    }
}
export const updatetodo= (todo)=>{
    return{
        type:UPDATE_TODO,
        payload:todo
    }
}