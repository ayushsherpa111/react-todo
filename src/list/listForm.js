import React from "react";
import "./list.css";

export default class ListForm extends React.Component {
    state = {};

    handleSubmit = e => {
        e.preventDefault();
        this.setState({ createdAt: +new Date(), completed: false }, () => {
            console.log("Submiting");
            this.props.add(this.state);
        });
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
