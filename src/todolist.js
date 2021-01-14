import React , {Component} from "react";
import ToDoItems from "./ToDoitems";

class ToDoList extends Component {
    constructor(props){
        super(props);
        this.state ={
            items:[]
        };
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }
    addItem(e) {

        // console.log(e.target[0].value);
        //console.log(this._inputElement.value);
        if(this._inputElement.value !== "") 
        {
            var newItem ={
                text: this._inputElement.value,
                key: Date.now()
            }
            this.state.items.push(newItem);
            this.setState({});
            //    this.setState((preState) => {
            //        return{
            //            items: preState.items.concat(newItem)
            //        };
              // });
            this._inputElement.value ="";
        }
        console.log(this.state.items);
        e.preventDefault();   
    }

    deleteItem(key){
        var filteredItems = this.state.items.filter((item) => {
            return (item.key !== key)
        });

        this.setState({
            items: filteredItems
        })
    }
    render() {
        // let a =10; //in reder we can write js & html
        return(
        // <h1>My First To Do List a ={a}</h1> //inreturn we write only html for JS {} is used
        
        
        <div>
             
            <form onSubmit = {this.addItem}>
                <input ref ={(a) => this._inputElement = a }  placeholder ="Enter Task"></input>
                <button type ="submit">Add</button> 
               
                
            </form>
            <ToDoItems entries ={this.state.items} delete = {this.deleteItem}/>
            
            {this.props.nishant ? this.props.nishant : null} 
        </div>
        );
    }
}
export default ToDoList;