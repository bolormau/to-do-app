'use client';

import { useState } from 'react';
import Link from 'next/link'
import { v4 as uuidv4 } from 'uuid';

import * as Button from "./Button";
import { InputTab } from "./InputTab";
import { TaskContainer } from './TaskContainer.';
import { TaskInfoContainer } from './TaskInfoContainer';

export const Container = () => {
  // STATES
  const [ inputValue, setInputValue ] = useState("");
  const [ tasks, setTasks ] = useState([ ]);
  const [ filter, setFilter ] = useState("All");
  const [ allTaskCount, setAllTaskCount ] = useState(0);
  const [ completedTaskCount, setCompletedTaskCount ] = useState(0);

  // STATE SETTERS
  const inputOnchangeHandler = (e) => {
    setInputValue(e.target.value);
  }

  const addOnclickHandler = () => {;
    const updatedTasks = [{ id: uuidv4(), name: inputValue, isCompleted: false }, ...tasks]
    if(inputValue !== "") setTasks(updatedTasks);
    setAllTaskCount(updatedTasks.length);
    setInputValue("");
  } 

  const checkboxOnchangeHandler = (id) => {
    const newTasks = tasks.map(task => 
      task.id === id ?  { ...task, isCompleted: !task.isCompleted } : task 
    );
    const completedTasks = newTasks.filter(task => task.isCompleted == true)
    setTasks(newTasks);
    setCompletedTaskCount(completedTasks.length);
  }

  const deleteOnclickHandler = (index) => {
    const tasksAfterDelete = tasks.filter((_, i) =>  i !== index )
    const completedTasksAfterDelete = tasksAfterDelete.filter(task => task.isCompleted === true)
    setTasks(tasksAfterDelete);
    setAllTaskCount(tasksAfterDelete.length);
    setCompletedTaskCount(completedTasksAfterDelete.length);
  }

  const clearCompletedOnclickHandler = () => {
    const notCompletedTasks = tasks.filter(task => task.isCompleted === false)
    setTasks(notCompletedTasks);
    setAllTaskCount(notCompletedTasks.length);
    setCompletedTaskCount(0);
  }

  const filteredTasks =  tasks.filter((task) => {
    if(filter === "All") return task;
    else if(filter === "Active") return task.isCompleted === false;
    else if(filter === "Completed") return task.isCompleted === true;
  })

  const keydownHandler = (e) => {
    if(e.key === "Enter"){
      addOnclickHandler()
    }
  }

  return (
    <>
      <div className="frame w-full h-[100vh] flex flex-col place-content-center place-items-center">
        <div className="content w-[377px] h-fit flex flex-col place-content-center items-center py-6 px-4 gap-10 rounded-[6px] bg-[#FFF] shadow-[0_0_12px_0] shadow-[rgb(0,0,0,0.16)] gap-y-10">
          <div className='main flex flex-col place-content-center items-center gap-5'>
            <p className="text-[20px, #000] font-semibold leading-7 tracking-[-0.5px]">
              To-Do list
            </p>
            <div className="flex gap-1.5">
              <InputTab 
                inputValue={inputValue} 
                keydownHandler={keydownHandler }
                inputOnchangeHandler={inputOnchangeHandler} 
              />
              <Button.AddButton 
                addOnclickHandler={addOnclickHandler} 
                label="Add"
              />
            </div>
            <Button.FilterButtons filter={filter} setFilter={setFilter}/>
            <div className='w-full flex flex-col place-content-center items-center gap-[10px]'>
              {
                tasks.length === 0 ? 
                <p className='h-[17px] text-[14px] text-[#6B7280] text-center'>No tasks yet. Add one above!</p>
                :
                <div className='w-full flex flex-col place-content-center items-center gap-[10px]'>
                  {
                    filteredTasks.map((task, i) => 
                    (
                      <TaskContainer 
                        key={task.id} 
                        i={i}
                        id={task.id} 
                        name={task.name} 
                        isCompleted={task.isCompleted} 
                        checkboxOnchangeHandler={() => checkboxOnchangeHandler(task.id)}
                        deleteOnclickHandler={() => deleteOnclickHandler(i)}
                      />
                    ))
                  }
                  <TaskInfoContainer 
                    allTaskCount={allTaskCount}  
                    completedTaskCount={completedTaskCount} 
                    clearCompletedOnclickHandler={clearCompletedOnclickHandler}
                  />
                </div>
              }
            </div>
          </div>
          <div className='flex text-[12px] gap-1'>
            <p className='text-[#6B7280]'>Powered by</p>
            <Link 
              className='text-[#3B73ED]'
              href="https://pinecone.mn/">Pinecone academy
            </Link>
          </div>
        </div>
      </div>
    </>
  );
  };