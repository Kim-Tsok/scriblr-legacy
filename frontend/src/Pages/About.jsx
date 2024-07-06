import Search from "../components/Search";

const About = () => {
  return (
    <>
      <div className="pt-10 font-mono flex flex-col items-center justify-center">
        <h1 className="text-center text-2xl font-bold">What is scriblr?</h1>
        <p className="text-center pt-2">
          Scriblr gives all writers a chance to be seen through a rotating
          homepage of different work for exploration to the user. No algorithm
          that forces you to doom scroll as a user and to demoralize your work
          as a creator. Scriblr is also place for publishers or musicians to
          find ghost writers, scripts, songs, poems, authors, books and so much
          more.
        </p>
        {/* <Search /> */}
      </div>
    </>
  );
};

export default About;
