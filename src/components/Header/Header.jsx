import Logos from "./Logo";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className=" bg-[#060606] w-full top-0 py-4 text-white font-semibold ">
      <div className=" flex flex-row justify-around ">
        <div className="  flex  justify-center items-center  ">
          <Logos />
        </div>
        <div className="  flex justify-center items-center   ">
          <Navbar />
        </div>
      </div>
    </header>
  );
};

export default Header;
