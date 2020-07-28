import React from "react";
import shortid from "shortid";

export default function MyList(props) {
    return (
        <div className="myList">
            <form className="searchBar" onSubmit={props.onSubmit}>
                <input
                    className="search"
                    type="text"
                    placeholder="Search todos"
                />
                <input className="cancel" type="button" value="Cancel" />
            </form>
            <h1>
                {props.todos.length > 0 ? (
                    "Your Todo Activites"
                ) : (
                    <div className="notFound">
                        <h1>No Todo Activities</h1>
                        <img src="images/404.png" alt="" />
                    </div>
                )}
            </h1>
            <ul>
                {props.todos.map(e => (
                    <li key={shortid.generate()}>
                        <img
                            src={
                                "images/" +
                                (e.completed ? "complete" : "incomplete") +
                                ".png"
                            }
                            alt=""
                        />
                        <span>{e.todoTitle}</span>
                        <div className="config">
                            <img
                                src={
                                    "images/" +
                                    (e.completed
                                        ? "mark_complete"
                                        : "mark_incomplete") +
                                    ".png"
                                }
                            />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
