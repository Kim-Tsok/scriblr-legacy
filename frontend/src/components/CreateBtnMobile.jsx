const CreateBtnMobile = () => {
  const handleClick = () => {
    const c_overlay = document.getElementById("create-overlay");

    c_overlay.style.display = "flex";
  };
  return (
    <>
      <div className="w-screen fixed h-10 bottom-0 flex items-center justify-center z-50">
        <button
          to="/create"
          onClick={handleClick}
          className="rounded-full fixed  bottom-0 m-7 text-lg w-10 h-10 flex items-center justify-center font-semibold bg-blue-800 text-white  font-mono md:hidden"
        >
          +
        </button>
      </div>
    </>
  );
};

export default CreateBtnMobile;
