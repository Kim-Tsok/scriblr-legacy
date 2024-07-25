import arrow from "/arrow-right.svg";
import { useState } from "react";

const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const waitlist = { email };
    const response = await fetch("http://localhost:5174/api/emails", {
      method: "POST",
      body: JSON.stringify(waitlist),
      headers: {
        "Content-Type": "application/Json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setEmail("");
      setError(null);
      console.log("New user added", json);
    }
  };
  return (
    <>
      <form className="flex w-screen items-center justify-center text-black max-md:flex-col ">
        <input
          type="email"
          id="waitlistForm"
          name="waitlist"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          className="p-2 w-[30%] h-[2.5rem] border-2 border-gray-500 outline-none max-md:w-[60%] max-sm:w-[70%]"
        />
        <button
          className="p-2 h-[2.5rem] px-3 bg-blue-900 text-white max-md:m-3"
          type="submit"
          onClick={handleSubmit}
        >
          <div className="flex items-center justify-center">
            Join
            {/* <img src={arrow} alt="arrow-right" className="w-5 ml-2" /> */}
          </div>
        </button>
      </form>
    </>
  );
};

export default WaitlistForm;
