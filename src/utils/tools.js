export function sort_based(list, category) {
    return list.filter(e => {
        if (category === "Completed") {
            return e.completed;
        } else {
            return !e.completed;
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
    const start = Date.UTC(
        created_date.getFullYear(),
        created_date.getMonth(),
        created_date.getDate(),
        created_date.getHours(),
        created_date.getMinutes(),
        created_date.getSeconds(),
        created_date.getMilliseconds()
    );
    const end = Date.UTC(
        due_date.getFullYear(),
        due_date.getMonth(),
        due_date.getDate(),
        due_date.getHours(),
        due_date.getMinutes(),
        due_date.getSeconds(),
        due_date.getMilliseconds()
    );
    console.log(start);
    console.log(end);
    return Math.floor((end - start) / _MS_PER_DAY);
}
