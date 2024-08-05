import { useState } from "react";
import { Link } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(username, password);
  };

  return (
    <>
      <div className="p-2 w-screen h-screen flex items-center justify-center font-mono">
        <form
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col p-4 border-2 border-neutral-600 rounded-md w-[30%] max-lg:w-[50%] max-md:w-[80%]"
        >
          <h3 className="text-2xl text-center font-bold text-blue-800 mb-4">
            Login
          </h3>
          <label>Username or email:</label>
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            placeholder="johndoe01"
            className="border-2 border-neutral-600 outline-none rounded-md px-2 p-1 mb-2"
          />
          <label>Password:</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="enter your password"
            className="border-2 border-neutral-600 outline-none rounded-md px-2 p-1"
          />
          <button
            type="submit"
            className="p-2 h-[2.5rem] px-3 bg-blue-900 text-white my-3 text-center"
            disabled={isLoading}
          >
            login
          </button>
          <p className="text-center text-[16px]">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-800 underline">
              signup
            </Link>
          </p>
          <p className="text-center font-bold my-2">-or-</p>
          <button
            type="submit"
            className="p-2 h-[2.5rem] px-3 bg-gradient-to-b from-gray-200 to-neutral-300 text-black  text-center border-2 border-gray-300"
            disabled={isLoading}
          >
            Google
          </button>
          {error && <p>{error}</p>}
        </form>
      </div>
    </>
  );
};

export default Login;
