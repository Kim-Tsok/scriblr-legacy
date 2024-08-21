import { useState } from "react";
import { Link } from "react-router-dom";

const CreateContent = () => {
  const [contentType, setContentType] = useState("book");

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full space-y-8 p-8">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              What do you want to create?
            </h2>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="create-type" className="sr-only">
                  Create type
                </label>
                <select
                  name="Content"
                  id="contentSelect"
                  onChange={(e) => setContentType(e.target.value)}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md rounded-b-md focus:outline-none focus:ring-blue-800 focus:border-blue-800 focus:z-10 sm:text-sm bg-white"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="book">Book</option>
                  <option value="article">Article</option>
                  <option value="poem">Poem</option>
                </select>
              </div>
            </div>

            <div>
              <Link
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900"
                to="/create/books"
              >
                Continue
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateContent;
