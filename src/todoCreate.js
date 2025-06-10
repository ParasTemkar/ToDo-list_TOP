
class ToDo{

constructor(title, note, duedate, priority) {
    this.title = title;
    this.note = note;

    const date = new Date(duedate);
    this.duedate = new Date(date.getFullYear(), date.getMonth(), date.getDate());

    this.priority = priority;
}


 
}

export {ToDo};