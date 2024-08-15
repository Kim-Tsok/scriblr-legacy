const PrimaryBtn = (content, width) => {
  return (
    <button
      className={`p-2 h-[2.5rem] px-3 bg-blue-900 text-white my-3 text-center ${width}`}
    >
      {content}
    </button>
  );
};

export default PrimaryBtn;
