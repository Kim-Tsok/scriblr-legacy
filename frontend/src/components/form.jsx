const Form = () => {
    return (
      <>
        <div className="w-screen flex items-center justify-center overflow-hidden relative bg-white">
          <form
            className="w-screen flex h-screen items-center justify-center font-mono z-50 fixed inset-0 bg-black backdrop-blur-sm bg-opacity-25"
            id="form"
            onSubmit={handleFileSubmit}
          >
            <div
              className="bg-white flex flex-col font-mono px-[3rem] py-[2rem] rounded-lg border-2 border-gray-100 shadow-xl m-4 overflow-hidden justify-center items-center"
              onSubmit={handleSubmit}
              id="firstForm"
            >
              <div className="w-full flex items-end justify-end">
                <Link
                  className="text-center cursor-pointer text-sm bg-blue-800 text-white shadow-xl w-7 h-7"
                  to="/discover/books"
                >
                  X
                </Link>
              </div>
              <div>
                <h1 className="text-center text-2xl font-bold text-blue-800 m-3">
                  Add a new book
                </h1>
              </div>
              <div className="flex">
                <div className="flex flex-col">
                  <p>Title:</p>
                  <input
                    type="text"
                    name="title"
                    value={title}
                    id="title"
                    required
                    onChange={(e) => setTitle(e.target.value)}
                    className="outline-none border-2 bg-white border-gray-500 rounded-md p-1 mb-4 px-2 font-serif"
                  />
                  <label>About:</label>
                  <textarea
                    type="text"
                    value={about}
                    name="about"
                    id="about"
                    rows="7"
                    spellCheck
                    minLength={10}
                    maxLength={1024}
                    required
                    onChange={(e) => setAbout(e.target.value)}
                    className="outline-none border-2 bg-white border-gray-500 rounded-md p-1 px-2 font-serif resize-none"
                  />
                  <label
                    className="text-right text-sm text-gray-500 mb-3"
                    id="characterCounter"
                  >
                    {characterCount}/1024
                  </label>
                  <label>Cover:</label>
                  <div className="p-1 rounded-md border-2  border-zinc-500">
                    <input
                      type="file"
                      accept="image/*"
                      required
                      onChange={handleContentImageUpload}
                      className="w-full h-full z-10 "
                    />
                  </div>
                  <label className="hidden">Book:</label>
                  <input
                    type="file"
                    onChange={onFileChange}
                    accept=".pdf"
                    className="p-2 hidden"
                  />
                </div>

                <div className="bg-white p-5 text-center pr-0 max-md:hidden">
                  Cover Preview
                  {cover ? (
                    <>
                      <img
                        src={cover}
                        className="h-[270px] w-[180px] object-cover items-center border-2 border-gray-500"
                      />
                    </>
                  ) : (
                    <>
                      <img
                        src={coverPreview}
                        className="h-[270px] w-[180px] object-cover items-center border-2 border-gray-500"
                      />
                    </>
                  )}
                </div>
              </div>
              <div className="w-full flex items-center justify-center flex-col">
                <button
                  className="mt-3 px-3 py-2 bg-blue-800 text-white"
                  onClick={handleOpenNew}
                >
                  Next
                </button>
                {error && <div className="text-red-500 mt-2">{error}</div>}
              </div>
            </div>
            <div
              className="w-screen h-full fixed flex-col bg-[#F3F3F3] hidden  items-center overflow-x-hidden"
              id="main"
            >
              <div
                className="flex w-screen items-center justify-between"
                id="topofquill"
              >
                <h1 className="text-3xl font-bold font-sans px-6">{title}</h1>
                <div className="flex items-end justify-end px-5">
                  <button
                    type="submit"
                    onClick={handleBack}
                    className="m-2 px-3 py-2 border-2 border-blue-800 text-black"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="m-2 px-3 py-2 bg-blue-800 text-white"
                    disabled={isLoading}
                  >
                    {isLoading ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </div>
              {error && <div className="text-red-500 mt-2">{error}</div>}
              <ReactQuill
                theme="snow"
                value={value}
                onChange={setValue}
                className=" flex items-center justify-center flex-col border-none"
              />
              {/* <div className="w-[80%] h-[90%] border-2 border-gray-600 m-4 p-4">
              <Tiptap />
            </div> */}
            </div>
          </form>
        </div>
      </>
    );
}
 
export default Form;