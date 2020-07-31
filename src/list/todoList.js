import React from "react";
import ListForm from "./listForm";
import MyList from "./mytodo";
import "./list.css";

export default class TodoList extends React.Component {
    state = {
        todos: [],
        task: "Incomplete"
    };

    deleteTask(id) {
        console.log("deleting task " + id);
        this.setState({
            todos: [...this.state.todos].filter(e => e.id !== id)
        });
    }

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

    mark_as(id, completed) {
        this.setState(state => ({
            todos: state.todos.map(e => (e.id === id ? { ...e, completed } : e))
        }));
    }

    render() {
        return (
            <div className="todoList">
                <div className="list">
                    <MyList
                        changeType={this.changeList.bind(this)}
                        type={this.state.task}
                        todos={this.state.todos}
                        delete={this.deleteTask.bind(this)}
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
