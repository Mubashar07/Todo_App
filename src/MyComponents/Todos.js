import React from 'react';
import Todo from './Todo';

export default function Todos(props) {
  return (
    <div className='container'>

    <h3>Todos list</h3>
    {props.data.length === 0 ? "not found" : 
    props.data.map((todo) =>{ 
       return <Todo key={todo.id} todo = {todo} Delete={props.Delete}/>
        
    })
  }
    </div>
  )
}
