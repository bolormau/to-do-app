export const InputTab = (props) => {
  const {inputValue, onChangeHandler} = props;

  return (
    <input className="w-70 h-10 flex flex-col px-4 py-2 content-center items-start shrink-0 border-[1px] border-[#E4E4E7] rounded-[6px] focus:outline-none focus:border-[#2463EB] focus:border-2" 
            placeholder="Add a new task..."
            type="text"
            value={inputValue}
            onChange={onChangeHandler}
    />
  );
};

// using css var in tailwind: text-[var(--input-label)];
// using rgba color in tailwind: text-[rgba(11,11,11,11,0.7)] - no space
