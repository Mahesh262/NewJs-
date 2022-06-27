import { ADD_TODO,DELETE_TODO,UPDATE_TODO } from "./TodoNewActions";
import { todos } from "./TodoState";
 console.log(todos)
 export const TodoReducers=(state=todos,action)=>{
    let NewTodos;    
    switch(action.type){
            case ADD_TODO:
                NewTodos= [...state];
                NewTodos.push(action.payload)
                return NewTodos
                case DELETE_TODO:
                    NewTodos=[...state];
                    console.log(NewTodos= NewTodos.filter(todo=>todo.id !== action.payload));
                    return NewTodos
                    case UPDATE_TODO:
                        NewTodos=[...state];
                        let index= -1;
                        for(let i=0; i< NewTodos.length;i++){
                            index++;
                             console.log(action.payload.id)
                            if(NewTodos[i].id === action.payload.id){
                                break;
                            }
                        }
                            if(index !== -1){
                                NewTodos[index]= action.payload;
                                  console.log(NewTodos[index])
                                return NewTodos;
                            }
                        
                        break;
                    default:
                  return state  
        }

        return state;
 }