// import "./Todo.css"
import Form from "./Form.jsx"
import Todos from "./Todos.jsx"
import { useState } from "react"
function Main() {
    const [input, setInput] = useState("");
    const [tasks, setTasks] = useState([]);
    const [isEditing, setIsEditing]= useState(false);
    const [idToEdit, setIdToEdit]= useState(null);

    function handleSubmit(e){
        e.preventDefault();
        // console.log("form submitted")
        // Pushing input into the task array
        //setTasks([...tasks, input]); // tasks.push(input)  in vanila js
        if(isEditing){
            // EDIT EXISTING TASK
            setTasks(
                tasks.map((existing) => 
                existing.id !== idToEdit ? {...existing, task: input} : existing
                )
            );
            // RESET
            setIsEditing(false);
            setIdToEdit(null);

        }

        else{
            // CREATE A NEW TASK
            const obj = { task: input, id: Date.now()};
            setTasks([...tasks, obj])
        }
        // RESETTING THE INPUT
        setInput("");
        

    }
    function handleDelete(idToDelete){
        setTasks(tasks.filter((task) => task.id !== idToDelete))

    }
    function handleEdit(idToEdit){
        const taskToEdit = tasks.find((task) =>task.id !==idToEdit);
        setInput(taskToEdit.task);
        setIsEditing(true);
        setIdToEdit(idToEdit);
    }


  return (
    <>
    <Form input={input} setInput={setInput} handleSubmit={handleSubmit} isEditing={isEditing}/>
    <Todos tasks={tasks} handleDelete={handleDelete} handleEdit={handleEdit}/>
    </>
  )
}

export default Main
