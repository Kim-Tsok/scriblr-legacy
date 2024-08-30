const CreateOverlay = () => {
  return (
    <>
      <div
        className="w-screen fixed h-screen bg-blur-lg bg-black opacity-25 z-[100] hidden max-md:hidden"
        id="create-overlay"
        onClick={() => {
          document.getElementById("create-overlay").style.display = "none";
        }}
      ></div>
    </>
  );
};

export default CreateOverlay;
