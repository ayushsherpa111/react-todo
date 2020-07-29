import React from "react";
import { generate } from "shortid";
import "./list.css";

const initial_state = {
    todoTitle: ""
};

export default class ListForm extends React.Component {
    state = initial_state;

    handleSubmit = e => {
        e.preventDefault();
        this.setState(
            { id: generate(), createdAt: +new Date(), completed: false },
            () => {
                console.log("Submiting");
                this.props.add(this.state);
                this.setState(initial_state);
            }
        );
    };

    handleChange = e => {
        this.setState({
            [e.target.name]:
                e.target.name === "todoDate"
                    ? +new Date(e.target.value)
                    : e.target.value
        });
    };

    render() {
        return (
            <div className="todoForm">
                <h1>Create Task</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="formGroup">
                        <label htmlFor="todoTitle">Todo Task</label>
                        <input
                            value={this.state.todoTitle}
                            onChange={this.handleChange}
                            type="text"
                            name="todoTitle"
                            required
                            placeholder="Task"
                        />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="todoDate">Due Date</label>
                        <input
                            onChange={this.handleChange}
                            type="datetime-local"
                            name="todoDate"
                            required
                            placeholder="Due Date"
                        />
                    </div>
                    <div className="formGroup">
                        <input type="submit" value="Create" name="submitBtn" />
                    </div>
                </form>
            </div>
        );
    }
}
