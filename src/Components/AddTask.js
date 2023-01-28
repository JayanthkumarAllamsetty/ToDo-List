const AddTask=({newTask,setNewTask,addTask})=>{
    return (
        <div className='row'>
        <div className='col'>
    
        <input
        value={newTask}
        onChange={(e)=>setNewTask(e.target.value)}
        
        className='form-control formcontrol-lg'></input>
        <br/>
        </div>
        <div className='col-auto'>
          <button 
          onClick={addTask}
          className='btn btn-lg btn-success'>
            Add Task
          </button>
          
          <br/>
        </div>
    </div>
        
    )
}
export default AddTask;