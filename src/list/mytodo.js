import React from "react";

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
            {props.todos.length > 0 ? (
                <div className="selectType">
                    <h3
                        className={
                            props.type === "Completed" ? "selected" : null
                        }
                    >
                        Completed
                    </h3>
                    <h3>Incomplete</h3>
                </div>
            ) : null}
            <ul>
                {props.todos.map(e => (
                    <li key={e.id}>
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
                                alt="task status"
                                src={
                                    "images/" +
                                    (e.completed
                                        ? "mark_incomplete"
                                        : "mark_complete") +
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
