import React from "react";
import { sort_based, calc_difference } from "../utils/tools";

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
                        onClick={() => props.changeType("Completed")}
                    >
                        Completed
                    </h3>
                    <h3
                        className={
                            props.type === "Incomplete" ? "selected" : null
                        }
                        onClick={() => props.changeType("Incomplete")}
                    >
                        Incomplete
                    </h3>
                </div>
            ) : null}
            <ul>
                {sort_based(props.todos, props.type).map(e => {
                    const days = calc_difference(e.createdAt, e.todoDate);
                    let was_clicked = false;
                    return (
                        <li key={e.id} className={was_clicked ? "fadeOut" : ""}>
                            <img
                                className="stat"
                                src={
                                    "images/" +
                                    (e.completed ? "complete" : "incomplete") +
                                    ".png"
                                }
                                alt=""
                            />
                            <span>{e.todoTitle}</span>
                            <div className="config">
                                <p>
                                    Time Remaining:{" "}
                                    <span
                                        style={
                                            days <= 2
                                                ? {
                                                      color: "#ff7700",
                                                      fontWeight: 800
                                                  }
                                                : { color: "#00ff00" }
                                        }
                                    >
                                        {days}
                                    </span>
                                </p>
                                <img
                                    alt="task status"
                                    onClick={() => {
                                        was_clicked = true;
                                        props.mark(e.id, !e.completed);
                                    }}
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
                    );
                })}
            </ul>
        </div>
    );
}
