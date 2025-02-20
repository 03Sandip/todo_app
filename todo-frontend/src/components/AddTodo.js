import React, { useState } from 'react'



const AddTodo = ()=>{
  const [todo, setTodo] = useState('This is a new state')

  const handleSubmit = async(e)=>{
    e.preventDefault();
     console.log(todo)
     try {
      const response = await fetch('http://localhost:3001/add-todo',{
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body:JSON.stringify({todo})
      })

      console.log("Response recived", response)
     } catch (err) {
      console.log("Error occured wwhile adding todo",err)
      
     }
  }
    return (
        <form onSubmit={handleSubmit}>
          <input 
              type="text" 
              value={todo}
              onChange={(e)=> setTodo(e.target.value)}

          /> 

            <button type ="submit">
              AddTodo
            </button>
        </form>
      );
      
}


export default AddTodo 