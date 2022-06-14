import React, {useState} from 'react'

export default function AddTodo(props) {
    const [name, setname] = useState("");
    const [Address, setAddress] = useState("")
   const submit = (e) =>{
       e.preventDefault();
       if (name == '' || Address=='') {
        alert("all Fields are required");
       }else{

           props.newValues(name,Address);
       }
    }
  return (
    <div className='container'>
    <form onSubmit={submit}>
  <div className="form-group">
    <label htmlFor="name">Name:</label>
    <input type="text" value={name} onChange={(e) =>{setname(e.target.value)} } className="form-control" id="name" />
  </div>
  <div className="form-group">
    <label htmlFor="address">Address:</label>
    <input type="text" value={Address} onChange={(e) =>{setAddress(e.target.value)} } className="form-control" id="address" />
  </div>
  <button type="submit" className="btn btn-success">Submit</button>
</form>
    </div>
  )
}
