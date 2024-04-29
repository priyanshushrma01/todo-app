import { useState } from "react";


export function Todos({todos}){
    const [todoList,setTodoList] = useState(todos);
    function markcomplete(id){
        fetch("http://localhost:3000/completed" , {
                method: "PUT",
                body: JSON.stringify({
                id
            }),
            headers:{
                "Content-type":"application/json"
            }
            })
            .then(async (res)=>{
                const json = await res.json(); 
                const updatedTodos = todoList.map(todo=>{
                    if(todo._id===id){
                        return {...todo,completed:true}
                    }else{
                        return todo;
                    }
                })
                setTodoList(updatedTodos);
                alert("marked as completed");
        })
    }
    return <div>
        {todos.map((todo)=>{
            return <div>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button onClick={()=>markcomplete(todo._id)}>{todo.completed ? "Completed" :"Mark as complete"}</button>
            </div>
        })}
    </div>
}

