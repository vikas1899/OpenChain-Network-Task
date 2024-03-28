import { FaArrowRight } from "react-icons/fa";
import LogoSmall from "../../assets/SLogo.png";

function Card({ title, img }) {
  return (
    <div>
      {title !== undefined ? (
        <div className="bg-sky-200 border-black border-4 py-2 flex flex-col gap-3 rounded-2xl">
          <div className="mx-3 flex flex-row items-center font-semibold gap-3">
            <img
              src={LogoSmall}
              className="rounded-full"
              width={50}
              height={50}
              alt="Logo"
            />
            {title && <h2 className="text-xl">Join Developement</h2>}{" "}
            {/* Add a check for title */}
          </div>

          <div
            className="outline outline-3 flex  flex-col justify-center items-center"
            style={{ position: "relative" }}
          >
            <img src={img} alt={title} />{" "}
            <div
              className="font-semibold text-xl  "
              style={{
                position: "absolute",
                top: "10%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
                color: "black",
                paddingTop: 5,
              }}
            >
              {title}
            </div>
          </div>

          <div className="flex justify-end">
            <button className="hover:bg-black hover:text-white outline outline-2 p-1 rounded-full px-4 mx-3">
              <div className="flex flex-row gap-2 items-center">
                <p className="font-semibold">Explore</p>
                <FaArrowRight className="ring-1 bg-gradient-to-r from-[#faff03] to-[#1aff96] ring-black text-black rounded-full p-1" />
              </div>
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Card;
