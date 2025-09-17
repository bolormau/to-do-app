'use client';

import { useState } from 'react';
import { DeleteButton } from './Button';

export const TaskContainer = (props) => {
  const { i, id, name, isChecked, checkboxOnchangeHandler, deleteOnclickHandler } = props;

  return (
    <div className="flex place-content-between items-center w-full p-4 gap-[10px] bg-[#F9FAFB]">
      <div className='flex gap-[10px]'>
        <input className="w-5 h-5 accent-[#0275FF]" type="checkbox" checked={isChecked} onChange={() => checkboxOnchangeHandler(id)}/>
        <p className={`text-[#000000] text-[14px]
            ${
                isChecked ? "line-through" : ""
            }
          `}
        >{name}</p>
      </div>
      <DeleteButton deleteClicked={() => deleteOnclickHandler(i)}/>
    </div>
  );
}