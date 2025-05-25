import { MdDelete, MdEdit } from "react-icons/md";
function Todos({tasks, handleDelete, handleEdit}) {
  return (
    <>
    <ul className="">
        {
            tasks.map((task) =>{
                return <li className="flex w-42 justify-between items-center text-xl mx-4 mb-3 p-2" 
                key={task.id} > 
                <span>{task.task}</span>
                <MdDelete className="cursor-pointer" onClick={() => handleDelete(task.id)} />
                <MdEdit className="cursor-pointer"  onClick={()=> handleEdit(tasks.id)}/>
                </li>;
                
            })
        }

    </ul>
    </>
    );
}

export default Todos
