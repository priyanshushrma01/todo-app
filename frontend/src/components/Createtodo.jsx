import { useState } from "react";

export function Createtodo(){
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    return <div>
        <input style={{
            padding:10,
            margin:10
        }} type="text" placeholder="Enter Title" onChange={function(e){
            const value = e.target.value;
            setTitle(value);
        }}></input><br />
        <input style={{
            padding:10,
            margin:10
        }} type="text" placeholder="Enter Description" onChange={function(e){
            const value = e.target.value;
            setDescription(value);
        }}></input><br />
        <button style={{
            padding:10,
            margin:10
        }} onClick={ ()=>{
            fetch("http://localhost:3000/todo" , {
                method: "POST",
                body: JSON.stringify({
                    title:title,
                    description:description
                }),
                headers:{
                    "Content-type":"application/json"
                }
            })
                .then(async (res)=>{
                    const json = await res.json();
                    alert("todo added");
                })
        }}>Add a todo</button>
    </div>
}