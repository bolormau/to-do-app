export const AddButton = (props) => {
  const { label, addOnclickHandler } = props;

  return (
    <button className="inline-block h-10 py-2 px-4 bg-[#3C82F6] text-[#F9F9F9] text-[14px] rounded-[6px] cursor-pointer hover:bg-blue-600"
            onClick={addOnclickHandler}>
      {label}
    </button>
  );
}

export const DeleteButton = (props) => {
  const { label="Delete", deleteClicked, i } = props;

  return (
    <button className="flex place-content-center items-center h-[30px] py-1.5 px-3 bg-[#FEF2F2] text-[#EF4444] text-[14px] rounded-[6px] cursor-pointer hover:bg-[#FEF2F280]"
            onClick={deleteClicked}        
    >
      {label}
    </button>
  );
};

export const ClearCompletedButton = (props) => {
  const { clearCompletedOnclickHandler } = props;

  return (
    <button className="flex place-content-center items-center text-[#EF4444] text-[14px] rounded-[6px] cursor-pointer"
            onClick={clearCompletedOnclickHandler}
    >
      Clear completed
    </button>
  );
};

export const FilterButtons = (props) => {
  const { filter, setFilter } = props;
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