import Logos from "../Header/Logo";

const Footer = () => {
  return (
    <div className=" py-4 mt-4 flex flex-col justify-center items-center  bg-[#060606]">
      <div>
        <Logos />
      </div>
      <span className=" w-[70%]  border border-1  my-5 outline-slate-500 "></span>
      <div>
        <p className=" pt-4 text-white text-md">
          2024 All Rights Reserved - chaintech Network
        </p>
      </div>
    </div>
  );
};

export default Footer;
