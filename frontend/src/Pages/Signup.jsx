import { useState } from "react";
import { useSignup } from "../hooks/useSignup";
import { Link, useNavigate } from "react-router-dom";
import AssignAvatar from "../components/signup/login/AssignAvatar";
import PrimaryBtn from "../components/PrimaryBtn";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error, isLoading } = useSignup();
  const navigate = useNavigate();
  const avatar = "";

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      AssignAvatar(avatar);
      await signup(firstName, lastName, username, email, password, avatar);
      navigate("/discover");
    } catch (error) {
      navigate("/signup");
    }
  };
  return (
    <>
      <div className="p-2 w-screen h-screen flex items-center justify-center font-mono">
        <form
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col p-4 border-2 border-neutral-600 rounded-md w-[33%] max-lg:w-[50%] max-md:w-[90%]"
        >
          <h3 className="text-2xl text-center font-bold text-blue-800 mb-4">
            Sign up
          </h3>
          <div className="flex w-full mb-2 mr-4 max-md:flex-col">
            <div className="flex flex-col">
              <label>First Name:</label>
              <input
                type="text"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                placeholder="John"
                className="border-2 bg-white border-neutral-600 outline-none rounded-md px-2 p-1 w-full"
              />
            </div>
            <div className="flex flex-col md:ml-4 ">
              <label>Last Name:</label>
              <input
                type="text"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                placeholder="Doe"
                className="border-2 border-neutral-600 bg-white outline-none rounded-md px-2 p-1 w-full "
              />
            </div>
          </div>
          <label>Email:</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="johndoe123@gmail.com"
            className="border-2 border-neutral-600 bg-white outline-none rounded-md px-2 p-1 mb-2"
          />
          <label>Username:</label>
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            placeholder="johndoe01"
            className="border-2 border-neutral-600 bg-white outline-none rounded-md px-2 p-1 mb-2"
          />
          <label>Password:</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="enter your password"
            className="border-2 border-neutral-600 bg-white outline-none rounded-md px-2 p-1"
          />
          <button
            type="submit"
            className={`p-2 h-[2.5rem] px-3 bg-blue-900 text-white my-3 text-center`}
            disabled={isLoading}
          >
            Signup
          </button>
          <PrimaryBtn content="Click me" width="w-full" />
          <p className="text-center text-[16px]">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-800 underline"
              disabled="true"
            >
              login
            </Link>
          </p>
          {error && (
            <div className="p-2 border-2 border-red-700 bg-red-200 text-red-600 mt-2">
              {error}
            </div>
          )}
        </form>
      </div>
    </>
  );
};

export default Signup;
