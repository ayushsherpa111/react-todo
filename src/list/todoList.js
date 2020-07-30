import React from "react";
import ListForm from "./listForm";
import MyList from "./mytodo";
import "./list.css";

export default class TodoList extends React.Component {
    state = {
        todos: [],
        task: "Incomplete"
    };

    changeList(task) {
        console.log(task);
        this.setState({ task });
    }

    addTodo(e) {
        console.log("recieved");
        const todos = this.state.todos;
        todos.push(e);
        this.setState({ todos });
    }

    mark_as(id, status) {
        const todos = this.state.todos;
        console.log(status);
        todos[todos.findIndex(e => e.id === id)].completed = status;
        console.log(todos);
        this.setState({ todos });
    }

    render() {
        return (
            <div className="todoList">
                <div className="list">
                    <MyList
                        changeType={this.changeList.bind(this)}
                        type={this.state.task}
                        todos={this.state.todos}
                        mark={this.mark_as.bind(this)}
                    />
                </div>
                <div className="listForm">
                    <ListForm add={e => this.addTodo(e)} />
                </div>
            </div>
        );
    }
}
