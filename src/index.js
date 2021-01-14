import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ToDoList from "./todolist";

var destination = document.querySelector("#container");
ReactDOM.render(
    
    <div>
        <center>
        <h1>My To Do List </h1>
        <ToDoList /></center>
        
    </div>
    ,
    destination
)