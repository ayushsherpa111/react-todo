export function sort_based(list, category) {
    return list.filter(e => {
        if (category === "Completed") {
            return e.completed;
        } else if (category === "Incomplete") {
            return !e.completed;
        } else {
            return true;
        }
    });
}

const _MS_PER_DAY = 1000 * 60 * 60 * 24;

export function fix_stupid_format(date) {
    const double_month = date.getMonth() + 1;
    return (
        date.getFullYear() +
        "-" +
        double_month.toString().padStart(2, "0") +
        "-" +
        date
            .getDate()
            .toString()
            .padStart(2, "0") +
        "T" +
        date
            .getHours()
            .toString()
            .padStart(2, "0") +
        ":" +
        date
            .getMinutes()
            .toString()
            .padStart(2, "0")
    );
}

export function calc_difference(created_date, due_date) {
    due_date = new Date(due_date);
    const start = new Date(
        created_date.getFullYear(),
        created_date.getMonth(),
        created_date.getDate(),
        created_date.getHours(),
        created_date.getMinutes(),
        created_date.getSeconds(),
        created_date.getMilliseconds()
    );
    const end = new Date(
        due_date.getFullYear(),
        due_date.getMonth(),
        due_date.getDate(),
        due_date.getHours(),
        due_date.getMinutes(),
        due_date.getSeconds(),
        due_date.getMilliseconds()
    );
    const days = Math.floor((end - start) / _MS_PER_DAY) * 24 * 60 * 60 * 1000;
    const diff_time_ms = end.getTime() - start.getTime() - days;
    const hours = Math.floor(diff_time_ms / 1000 / 60 / 60);
    const minutes = Math.floor(
        (diff_time_ms - hours * 1000 * 60 * 60) / 1000 / 60
    );
    const todo_time = `${Math.floor(
        (end - start) / _MS_PER_DAY
    )} days ${hours
        .toString()
        .padStart(2, 0)} hours ${minutes.toString().padStart(2, 0)} minutes`;
    return todo_time;
}
