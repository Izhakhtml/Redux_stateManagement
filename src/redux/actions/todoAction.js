export const addNewTodo =(text)=>(dispatch)=>{
const todo = {name:text,age:34}
dispatch({type:"ADD_TODO",payload:todo})    
}