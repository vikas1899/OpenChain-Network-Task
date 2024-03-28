import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  return (
    <div className="w-full h-screen  lg:py-[10%] py-[15%] bg-[#060606] ">
      <div className=" flex flex-col w-[80%]  items-center  mx-auto   text-center text-white">
        <h1 className="text-4xl md:text-9xl tracking-wider font-extrabold ">
          WELCOME TO
        </h1>
        <h2 className="text-4xl md:text-9xl tracking-wide font-extrabold ">
          <span className="bg-gradient-to-r  from-[#faff03] to-[#1aff96] text-transparent bg-clip-text">
            CHAINTECH
          </span>
        </h2>
        <p className="text-lg  w-[90%] lg:w-[50%] text-center mx-auto lg:text-xl mb-8">
          Your introductory message or description here. Lorem, ipsum dolor.
          Dolores, veniam ipsum? Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Necessitatibus voluptatibus culpa mollitia error
        </p>
        <button className="flex items-center gap-3 bg-white text-[#060606] text-xl lg:text-2xl font-bold rounded-full py-3 px-6 hover:scale-105 duration-100">
          Get Started{" "}
          <FaArrowRight
            className="animate-bounce-right bg-black rounded-full p-1 "
            fill="white"
          />
        </button>
      </div>
    </div>
  );
};

export default Home;
