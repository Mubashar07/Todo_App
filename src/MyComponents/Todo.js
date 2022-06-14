import React from 'react'

export default function Todo(props) {
  return (
    <div>
    <table className="table table-dark">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Address</th>
      <th scope='col'>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{props.todo.id}</th>
      <td >{props.todo.name}</td>
      <td >{props.todo.Address}</td>
      <td>
      <button className='btn btn-danger'  onClick={()=>props.Delete(props.todo)}>Delete</button>
      </td>
    </tr>
  </tbody>
</table>
    </div>
  )
}
