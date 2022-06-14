import Navbar from './MyComponents/Navbar';
import Todos from './MyComponents/Todos';
import Footer from './MyComponents/Footer';
import AddTodo from './MyComponents/AddTodo';
import About from './MyComponents/About';
import React , {useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  const onDelete = (single) => {
    setData(data.filter((e) =>{
      return e!==single;
    }));
  }
  const addData = (name,address) => {
    const id = (data.length+1);
    const myNewValue = {
      id:id,
      name : name,
      Address : address,
    };
    setData([...data,myNewValue]);
    // alert(name+'/'+address)
  }
  const [data, setData] = useState([]);
  return (
    <Router>
    <Navbar title="Todo List"/>
    <Routes>
    <Route path="/" element={<div><AddTodo newValues = {addData} /><Todos data={data}  Delete={onDelete}/></div>}></Route>
    <Route path="/about" element={<About/>}></Route>
    </Routes>
    <Footer />
   </Router>
  );
}

export default App;
