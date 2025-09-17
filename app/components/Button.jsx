export const AddButton = (props) => {
  const { label, addClickHandler } = props;

  return (
    <button className="inline-block h-10 py-2 px-4 bg-[#3C82F6] text-[#F9F9F9] text-[14px] rounded-[6px] cursor-pointer hover:bg-blue-600"
            onClick={addClickHandler}>
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

export const RedButtonWithoutBg = (props) => {
  const { label } = props;

  return (
    <button className="flex place-content-center items-center h-[30px] py-1.5 px-3 text-[#EF4444] text-[14px] rounded-[6px] cursor-pointer"
            onClick={deleteClicked}        
    >
      {label}
    </button>
  );
};