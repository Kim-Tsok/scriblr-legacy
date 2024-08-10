import arrow from "/arrow-right.svg";
import { useState } from "react";

const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState("");
  const [error, setError] = useState(null);
  const submitBtn = document.getElementById("submitFormBtn");
  const waitlist = { email, name };
  let num = 0;
  const handleSubmit = async (e) => {
    e.preventDefault();

    num++;

    setIsLoading(true);
    const waitlist = { email, name };
    try {
      const response = await fetch(
        "https://scriblr-backend.onrender.com/api/emails",
        {
          method: "POST",
          body: JSON.stringify(waitlist),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

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
    submitBtn.style.backgroundColor = "rgb(16, 143, 16)";
    submitBtn.textContent = "Successful";
    setIsLoading(true);
    setTimeout(() => {
      submitBtn.textContent = "Join the waitlist";
      submitBtn.style.backgroundColor = "black";
      setIsLoading(false);
    }, 2300);
  };
  const ShowErrorMessage = () => {
    var submitBtn = document.getElementById("submitFormBtn");
    submitBtn.textContent = error || "Sorry, email could not be sent";
    submitBtn.style.backgroundColor = "rgb(158, 26, 26)";
    console.log(num);
    setIsLoading(true);
    setTimeout(() => {
      submitBtn.textContent = "Join the waitlist";
      submitBtn.style.backgroundColor = "black";
      setIsLoading(false);
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
          className="p-2 w-[35%] h-[2.5rem] border border-gray-200 outline-none max-md:w-[60%] max-sm:w-[78%] bg-transparent text-black mb-3 shadow-md"
        />
        <input
          type="email"
          id="waitlistForm"
          name="waitlist"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          className="p-2 w-[35%] h-[2.5rem] border border-gray-200 outline-none max-md:w-[60%] max-sm:w-[78%] bg-transparent text-black shadow-md"
        />
        <button
          className="p-2 h-[2.5rem] px-3 bg-black text-white m-3"
          type="submit"
          id="submitFormBtn"
          disabled={isLoading}
          onClick={handleSubmit}
        >
          <div className="flex items-center justify-center z-10 text-white bg-black">
            Join the waitlist
            {/* <img src={arrow} alt="arrow-right" className="w-5 ml-2" /> */}
          </div>
        </button>
      </form>
    </>
  );
};

export default WaitlistForm;
