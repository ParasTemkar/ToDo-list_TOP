import { myLibrary } from "./todoView";

function storeTodos(){
    localStorage.clear();
    localStorage.setItem("todos",JSON.stringify(myLibrary));
    console.log("Todos saved to localStorage.");
};

export {storeTodos};
