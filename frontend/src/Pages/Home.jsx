import Navbar from "../components/WaitlistNavbar";
import { React, useEffect, useState } from "react";
import Landing from "../components/Landing";
import Loader from "../components/Loader";

const home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Your async operation here
        await new Promise((resolve) => setTimeout(resolve)); // Simulated delay
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="font-mono">
        {isLoading ? (
          <>
            <Loader />
          </>
        ) : error ? (
          <div>Error: {error.message}</div>
        ) : (
          <>
            <Navbar />
            <Landing />
          </>
        )}
      </div>
    </>
  );
};

export default home;
