import React, { Component }  from 'react';
// import ReactDOM from "react-dom/client";
import { Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Navigation/Navbar.js";
import Employee from "./Employee/employee_list";
import Home from "./Pages/Home.js";
import About from "./Pages/About_us";
import Product from "./Pages/Product";
import Contact from "./Pages/Contact_us";

import { Greet } from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Count from './components/Count';
function App() {
  const employee_list = [
    {
      id:1,
      name:"Ashok Kumar",
      skill:"Laravel",
      email:"ashok@gmail.com",
      mobile:"9769105343"
    },
    {
      id:2,
      name:"Ashok Kumar",
      skill:"Laravel",
      email:"ashok@gmail.com",
      mobile:"9769105343"
    },
    {
      id:3,
      name:"Ashok Kumar",
      skill:"Laravel",
      email:"ashok@gmail.com",
      mobile:"9769105343"
    },
    {
      id:1,
      name:"Ashok Kumar",
      skill:"Laravel",
      email:"ashok@gmail.com",
      mobile:"9769105343"
    },
    {
      id:4,
      name:"Ashok Kumar",
      skill:"Laravel",
      email:"ashok@gmail.com",
      mobile:"9769105343"
    },
    {
      id:5,
      name:"Ashok Kumar",
      skill:"Laravel",
      email:"ashok@gmail.com",
      mobile:"9769105343"
    },
    {
      id:6,
      name:"Ashok Kumar",
      skill:"Laravel",
      email:"ashok@gmail.com",
      mobile:"9769105343"
    }
  ]
  // const  emp = employee_list.map(employee=><Employee  employee={employee} />
  // const  emp = <Employee  employee = {employee_list} />
  
 return(
  <div>
    <Navbar />
    <Route path="/home">
      <Home />
    </Route>
    <Route path="/about-us">
      <About />
    </Route>
    <Route path="/shop">
      <Product />
    </Route>
    <Route path="/employee-list">
      <Employee  employee = {employee_list} />
    </Route>
  </div>
 )
}
export default App;