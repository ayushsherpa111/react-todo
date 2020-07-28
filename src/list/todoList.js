import React from "react";
import ListForm from "./listForm";
import MyList from "./mytodo";
import "./list.css";

export default class TodoList extends React.Component {
    state = {
        todos: [{ todoTitle: "BRuh cum", completed: true }]
    };

    addTodo(e) {
        console.log("recieved");
        const todos = this.state.todos;
        todos.push(e);
        this.setState({ todos });
        console.log(this.state);
    }

    render() {
        return (
            <div className="todoList">
                <div className="list">
                    <MyList todos={this.state.todos} />
                </div>
                <div className="listForm">
                    <ListForm add={e => this.addTodo(e)} />
                </div>
            </div>
        );
    }
}
