import { myLibrary } from "./todoView";

function storeTodos(){
    localStorage.clear();
    localStorage.setItem("todos",JSON.stringify(myLibrary));
};

export {storeTodos};
