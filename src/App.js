import {useState} from 'react';
import AddTask from './Components/AddTask'
import ToDo from './Components/ToDo'
import UpdateForm from './Components/UpdateForm'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  const [toDo,setToDO]=useState([

   
  ]);
  const [newTask,setNewTask]=useState('');
  const [updateData,setUpdateData]=useState('');

  // Add task
  const addTask=()=>{
    if(newTask){
      let num = toDo.length+1;
      let newEntry = {id:num,title:newTask,status:false}
      setToDO([...toDo,newEntry])
      setNewTask('');
    }


  }

  // delete the task
  const deleteTask=(id)=>{
    let newTasks= toDo.filter(task=>task.id!==id)
    setToDO(newTasks)

  }



  // mark the task is done or not
  const markDone=(id)=>{
    let newTasks = toDo.map(task=>{
      if(task.id===id){
        return({...task,status:!task.status})
      }
      return task;
    })
    setToDO(newTasks);

  }


// cancel the task
  const cancelUpdate=()=>{

    setUpdateData('');
  }

 //change the task
  const changeTask=(e)=>{
    let newEntry ={
      id:updateData.id,
      title:e.target.value,
      status:updateData.status?true :false
    }
    setUpdateData(newEntry);


  }


  //update the task 
  const updateTask=(e)=>{
    let filterRecord =[...toDo].filter(task=>task.id !==updateData.id)
    let updatedObject = [...filterRecord,updateData]
    setToDO(updatedObject);
    setUpdateData('');

  }
  
  return (
    <div className="container App">
      
        <h1> TO DO List</h1>
        <br/>    <br/>

        {/*Updating the Todo List */}
        {updateData && updateData ? (
        <UpdateForm
        updateData={updateData}
        changeTask={changeTask}
        updateTask={updateTask}
        cancelUpdate={cancelUpdate}
        />
        ) : 
        ( 
          /*Adding Tasks to the Todo List */
          <AddTask
          newTask={newTask}
          setNewTask={setNewTask}
          addTask={addTask}
          />  
        )
        }
   {toDo && toDo.length ? '':'No Task are set'}
{/* Displaying TODO list */}
        <ToDo
        toDo={toDo}
        markDone={markDone}
        setUpdateData={setUpdateData}
        deleteTask={deleteTask}
        
        />
    </div>
  );
}

export default App;
