export const InputTab = (props) => {
  const { inputValue, keydownHandler, inputOnchangeHandler, placeholder="Add a new task...", type="text" } = props;
 
  return (
    <input className="w-70 h-10 flex flex-col px-4 py-2 content-center items-start shrink-0 border-[1px] border-[#E4E4E7] rounded-[6px] focus:outline-none focus:border-[#2463EB] focus:border-2" 
      placeholder={placeholder}
      type={type}
      value={inputValue}
      onKeyDown={keydownHandler}
      onChange={inputOnchangeHandler}
    />
  );
};