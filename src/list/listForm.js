import React from "react";
import { generate } from "shortid";
import { fix_stupid_format } from "../utils/tools";
import "./list.css";

const initial_state = {
    todoTitle: "",
    todoDate: fix_stupid_format(new Date())
};

export default class ListForm extends React.Component {
    state = initial_state;

    handleSubmit = e => {
        e.preventDefault();
        this.setState(
            {
                id: generate(),
                createdAt: new Date(),
                completed: false
            },
            () => {
                console.log("Submiting");
                this.props.add(this.state);
                this.setState(initial_state);
            }
        );
    };

    handleChange = e => {
        let data = "";
        if (e.target.name === "todoDate") {
            const date = new Date(e.target.value);
            data = fix_stupid_format(date);
        } else {
            data = e.target.value;
        }
        this.setState({
            [e.target.name]: data
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
                            value={this.state.todoDate}
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
