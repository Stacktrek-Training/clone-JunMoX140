import { FaSteam } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";


function SteamLogo() {
  return (
    <div className="flex flex-row m-auto space-x-3 -space-y-2 text-white text-right ">
          <button
            type="button" 
            className="z-10 border-4 border-gray-500 hover:border-orange-700 font-semibold bg-slate  rounded-lg text-2xl px-3 py-3 inline-flex items-center">
              <h2 href="#"  className="px-2 "> <FaSteam /></h2>
            PLAY FOR FREE
          </button>
                     

    </div>
  );
}
export default SteamLogo