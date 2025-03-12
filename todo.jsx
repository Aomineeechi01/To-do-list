import React from 'react'
import {useState} from 'react';

const Todo = () => {
    const[tasks, setTasks]=useState([]);

    const[newTask, setnewTask]=useState("");

    function handleinputchange(event){
        setnewTask(event.target.value);
    }

    function Addtask(){
        if(newTask.trim()!==""){
            setTasks((t)=>[...t,newTask]);
        setnewTask("");
        }
    }

    function deletetask(index){
        const updatetask=tasks.filter((_,i)=>i!==index);
        setTasks(updatetask);

    }



    function movetaskup(index){
        if(index>0){
            const moveupdate=[...tasks];
            [moveupdate[index],moveupdate[index-1]]=[moveupdate[index-1],moveupdate[index]];
            setTasks(moveupdate)
        }
    }

    function movetaskdown(index){
        if(index<tasks.length-1){
            const movedown=[...tasks];
            [movedown[index+1],movedown[index]]=[movedown[index],movedown[index+1]];
            setTasks(movedown);
        }
    }


  return (
    <div className='to-do-list'>
        <h1>TO-DO-LIST</h1>
        <div>
            <input type="text" placeholder="enter a task....." value={newTask} onChange={handleinputchange}/>


            <button className='add-button' onClick={Addtask}>Add</button>
        </div>

        <ol>
            {tasks.map((task,index)=>
                <li key={index}>
                    <span className='text'>{task}</span>
                    <button className='deletebutton' onClick={()=>deletetask(index)}>
                        🗑️

                    </button>

                    <button className='moveupbutton' onClick={()=>movetaskup(index)}>
                        ☝🏻
                    </button>

                    <button 
                    className='movedownbutton' 
                    onClick={()=>movetaskdown(index)}>
                        👇🏻
                    </button>
                </li>)}
        </ol>
      
    </div>
  )
}

export default Todo
