import { useState } from "react";
import { connect } from "react-redux";
import { addNewTodo } from "../../redux/actions/todoAction";
const Todos = (props)=>{ 
const[text,setText]=useState("")
return(
    <div >
         <input type="text" onChange={(e)=>{setText(e.target.value)}} />
         <button onClick={()=>props.addNewTodo(text)}>CLICK</button>
         <div className="div">
        {
          props.todos.map((res)=>
          <div className="details_todo">
          <h1>{res.name}</h1>
          <h1>{res.age}</h1>
          </div>
          )
        }             
         </div>

    </div>
)    
}
export default connect((state)=>({todos:state.todos}),{addNewTodo})(Todos)