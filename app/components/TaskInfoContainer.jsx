import { ClearCompletedButton } from "./Button";

export const TaskInfoContainer = (props) => {
  const { allTaskCount, completedTaskCount, clearCompletedOnclickHandler } = props;
  let s = completedTaskCount > 1 ? "s" : "";

  return (
    <div className='w-full h-10 flex place-content-between items-center self-stretch border-t-1 border-[#E4E4E7] pt-4 pb-1'>
      <p className='text-[14px] text-[#6B7280]'>{completedTaskCount} of {allTaskCount} task{s} completed</p>
      <ClearCompletedButton clearCompletedOnclickHandler={clearCompletedOnclickHandler} />
    </div>
  );
};