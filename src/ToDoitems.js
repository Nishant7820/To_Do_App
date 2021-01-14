import React, { Component } from "react";

class ToDoItems extends Component {
    constructor(props) {
        super(props);
        // this.delete = this.delete.bind(this); 
    }
    delete(key) {
        return this.props.delete(key);
    }
    render() {
        let entries = this.props.entries ? this.props.entries : null;
        let ListItems = entries.map((data) => {
            return <li key={data.key} > {data.text}
                <span id="delete" >
                    <i class="fas fa-trash" onClick={() => (this.delete(data.key))}></i>
                </span>  </li>
        });
        return (
            <div>
                <ul>
                    {ListItems}
                </ul>
            </div>

        );
    }
};

export default ToDoItems;