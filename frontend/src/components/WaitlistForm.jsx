import arrow from "/arrow-right.svg";
import { useState } from "react";

const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState(null);
  const API_URL =
    import.meta.env.VITE_API_URL || "https://scriblr-backend.onrender.com";

  const waitlist = { email, name };
  const handleSubmit = async (e) => {
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
    } catch (error) {
      console.error("Error:", error);
      setError(error.message);
      ShowErrorMessage();
    }
  };

  const ShowSuccessMessage = () => {
    var successMessage = document.getElementById("successMessage");
    successMessage.style.opacity = "100";
    successMessage.style.transition = "0.5s";
    successMessage.style.display = "block";
    setTimeout(() => {
      successMessage.style.opacity = "0";
      successMessage.style.display = "none";
    }, 2300);
  };
  const ShowErrorMessage = () => {
    var errorMessage = document.getElementById("errorMessage");
    errorMessage.textContent = error || "Sorry, email could not be sent";
    errorMessage.style.opacity = "100";
    errorMessage.style.transition = "0.5s";
    errorMessage.style.display = "block";
    setTimeout(() => {
      errorMessage.style.opacity = "0";
      errorMessage.style.display = "none";
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
        <div
          id="errorMessage"
          className="px-4 py-2 bg-gradient-to-b from-red-500 to-red-700 text-white w-[35%]  max-sm:w-[78%] z-20 text-center transition-all hidden opacity-0"
        >
          Sorry, email could not be sent
        </div>
        <div
          id="successMessage"
          className="px-4 py-2 w-[35%] max-sm:w-[78%] bg-gradient-to-b from-green-500 to-green-700 text-white text-center transition-all hidden opacity-0"
        >
          Email sent successfully
        </div>
        <button
          className="p-2 h-[2.5rem] px-3 bg-blue-900 text-white m-3"
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
