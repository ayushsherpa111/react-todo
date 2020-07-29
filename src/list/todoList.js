import React from "react";
import ListForm from "./listForm";
import MyList from "./mytodo";
import "./list.css";

export default class TodoList extends React.Component {
    state = {
        todos: [{ todoTitle: "Bruh", complete: true }],
        task: "Completed"
    };

    addTodo(e) {
        console.log("recieved");
        const todos = this.state.todos;
        todos.push(e);
        this.setState({ todos });
    }

    render() {
        return (
            <div className="todoList">
                <div className="list">
                    <MyList type={this.state.task} todos={this.state.todos} />
                </div>
                <div className="listForm">
                    <ListForm add={e => this.addTodo(e)} />
                </div>
            </div>
        );
    }
}
