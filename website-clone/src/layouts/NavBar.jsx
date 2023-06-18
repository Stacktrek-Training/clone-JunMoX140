import SteamLogo from "../components/SteamLogo"
import { FaGlobe } from "react-icons/fa";


function NavBar() {
    return (
<>

<nav className="fixed top-0 left-0 flex items-center justify-between w-screen h-24 pe-4">
    <ul className="flex items-center space-x-6 text-white text-3xl font-semibold">
        <li>
            <a href="https://www.dota2.com/home" className="flex items-center space-x-2 p-2 text-white">
                <img src="../src/assets/images/dota2logo2.png" className="h-8 mr-4" alt="Dota 2 Logo" />
                <span className="text-4xl font-semibold" >DOTA 2</span></a>
        </li>
        <li>Game</li>
        <li>Heroes</li>
        <li>News</li>
        <li>Esports</li>
    </ul>
    <div>
    <div className="flex flex-col ms-96 ps-96 -space-y-2 text-white text-right ">
        <h3 className=" block">LOGIN</h3>
        <h3><FaGlobe className=" block mr-6"/>Select Language</h3>
         
      </div>
    </div>
    <div className="flex flex-row-reverse"><SteamLogo/></div>
</nav>

</>
)
}

export default NavBar