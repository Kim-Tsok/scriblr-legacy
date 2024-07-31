import arrow from "/arrow-right.svg";
import { useState } from "react";

const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState("");
  const [error, setError] = useState(null);
  const API_URL =
    import.meta.env.VITE_API_URL || "https://scriblr-backend.onrender.com";

  const waitlist = { email, name };
  const handleSubmit = async (e) => {
    if (isLoading) {
      const submitBtn = document.getElementById("submitFormBtn");

      submitBtn.style.backgroundColor = "gray";
    }
    e.preventDefault();

    const waitlist = { email, name };
    try {
      const response = await fetch(`${API_URL}/api/emails`, {
        method: "POST",
        body: JSON.stringify(waitlist),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Network response was not ok");
      }

      const json = await response.json();
      setEmail("");
      setName("");
      setError(null);
      console.log("New user added", json);
      ShowSuccessMessage();
      setIsLoading(true);
    } catch (error) {
      console.error("Error:", error);
      setError(error.message);
      setIsLoading(false);
      ShowErrorMessage();
    }
  };

  const ShowSuccessMessage = () => {
    var submitBtn = document.getElementById("submitFormBtn");
    submitBtn.style.backgroundColor = "green";
    setTimeout(() => {
      submitBtn.textContent = "Join";
      submitBtn.style.backgroundColor = "rgb(30 58 138)";
    }, 2300);
  };
  const ShowErrorMessage = () => {
    var submitBtn = document.getElementById("submitFormBtn");
    submitBtn.textContent = error || "Sorry, email could not be sent";
    submitBtn.style.backgroundColor = "red";
    setTimeout(() => {
      submitBtn.textContent = "Join";
      submitBtn.style.backgroundColor = "rgb(30 58 138)";
    }, 2300);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex w-screen items-center justify-center text-black flex-col "
      >
        <input
          type="name"
          id="nameForm"
          name="name"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your full name"
          className="p-2 m-5 w-[35%] h-[2.5rem] border-2 border-gray-500 outline-none max-md:w-[60%] max-sm:w-[78%] bg-transparent text-white rounded-md"
        />
        <input
          type="email"
          id="waitlistForm"
          name="waitlist"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          className="p-2 w-[35%] h-[2.5rem] border-2 border-gray-500 outline-none max-md:w-[60%] max-sm:w-[78%] bg-transparent text-white rounded-md"
        />
        <button
          className="p-2 h-[2.5rem] px-3 bg-blue-900 text-white m-3"
          type="submit"
          id="submitFormBtn"
          disabled={isLoading}
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
