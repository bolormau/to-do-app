'use client';

import { useState } from 'react';

export const FilterButtons = (props) => {
  const { filter, setFilter } = props;

  const [active, setActive] = useState("All");
  const buttons = ["All", "Active", "Completed"];

  return (
    <div className="flex w-full content-center items-start gap-1.5">
      {
        buttons.map((btn) => (
          <button
            key={btn}
            onClick={() => {
                setFilter(btn);
                console.log(btn);
              }
            }
            className={`inline-block h-8 py-1 px-3 text-[12px] leading-full rounded-[6px] cursor-pointer transition-colors duration-300 ease-out
            ${
              filter === btn ? 'bg-[#3C82F6] text-[#F9F9F9]' : 'bg-[#F3F4F6] text-[#363636]'
            }
            `}>
            {btn}
          </button>
        ))
      }
    </div>
  );
}