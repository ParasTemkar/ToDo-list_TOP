class ToDo{

constructor(title, note, duedate, priority) {
    this.title = title;
    this.note = note;

    const date = new Date(duedate);
    this.duedate = new Date(date.getFullYear(), date.getMonth(), date.getDate());

    const priorityOptions = ['high', 'medium', 'low'];
    if (priorityOptions.includes(priority)) {
        this.priority = priority;
    } else {
        this.priority = 'low'; 
    }
}


}

const todo1 = new ToDo('IDBVersi','uhbgih','hbfi','2022-03-03','ifi');
console.log(todo1)