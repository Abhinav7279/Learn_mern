function Form({input, setInput, handleSubmit, handleEdit, isEditing}) {
  return (
    <>
    <div className="">
    <div className=" flex justify-center">
      <h1 className="text-2xl text-amber-500">TODO LIST</h1>
    </div>
    <form className="m-1 p-4 max-w-full h-auto flex justify-center" action="" onSubmit={handleSubmit}>  
        <input 
        type="text" 
        placeholder="Enter your task" 
        value={input}
        onChange= {(e) => setInput(e.target.value)}
        />
        <button type="submit">{isEditing ?  "Edit Task" : "Add Task"}</button>
    </form>
    </div>
    
    </>
  )
}

export default Form
