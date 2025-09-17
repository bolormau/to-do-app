export const DeleteButton = (props) => {
  const { label=Delete } = props;

  return (
    <button>
      {label}
    </button>
  );
};