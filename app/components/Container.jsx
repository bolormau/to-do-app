'use client';

import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

import { FilterButtons } from "./FilterButtons";
import * as Button from "./Button";
import { InputTab } from "./InputTab";
import { TaskContainer } from './TaskContainer.';
import { useSelectedLayoutSegment } from 'next/navigation';

export const Container = (props) => {
  // STATES
  const [ inputValue, setInputValue ] = useState("");
  const [ tasks, setTasks ] = useState([  ]);
  const [ filter, setFilter ] = useState("All");

  // STATE SETTERS
  const onChangeHandler = (e) => {
    setInputValue(e.target.value);
  }

  const addClickHandler = () => {
    if(inputValue !== "") setTasks([ { id: uuidv4(), name: inputValue, isCompleted: false }, ...tasks ]);
    setInputValue("");
  } 

  const checkboxOnchangeHandler = (id) => {
    const newTasks = tasks.map(task => 
      task.id === id ?  { ...task, isCompleted: !task.isCompleted } : task );
    setTasks(newTasks);
  }

  const deleteOnclickHandler = (index) => {
    setTasks(tasks.filter((_, i) =>  i !== index ))
  }


  const filteredTasks =  tasks.filter((task) => {
    if(filter === "All") return task;
    else if(filter === "Active") return task.isCompleted === false;
    else if(filter === "Completed") return task.isCompleted === true;
  })


  console.log(tasks);


  return (
    <>
      <div className="frame w-full h-[100vh] flex flex-col place-content-center place-items-center">
          <div className="app w-[377px] h-fit flex flex-col place-content-center items-center py-6 px-4 gap-2.5 rounded-[6px] bg-[#FFF] shadow-[0_0_12px_0] shadow-[rgb(0,0,0,0.16)] gap-y-[20px]">
          <p className="text-[20px, #000] font-semibold leading-7 tracking-[-0.5px]">
            To-Do list
          </p>
          <div className="flex gap-1.5">
            <InputTab inputValue={inputValue} onChangeHandler={onChangeHandler} />
            <Button.AddButton addClickHandler={addClickHandler} label="Add"/>
          </div>
          <FilterButtons filter={filter} setFilter={setFilter}/>
          <div className='w-full flex flex-col place-content-center items-center gap-[10px]'>
            {
              (tasks.length === 0 ? 
              <p className='h-[17px] text-[14px] text-[#6B7280] text-center'>No tasks yet. Add one above!</p>
              :
              filteredTasks.map((task, i) => {
                return <TaskContainer 
                          key={task.id} 
                          i={i}
                          id={task.id} 
                          name={task.name} 
                          isChecked={task.isCompleted} 
                          checkboxOnchangeHandler={checkboxOnchangeHandler}
                          deleteOnclickHandler={deleteOnclickHandler}
                      />;
              }))
            }
          </div>
        </div>
      </div>
    </>
  );
  };