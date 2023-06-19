import "../index.css"
import BgVid from "../components/BgVid.jsx";
import NavBar from "../layouts/NavBar.jsx";
import Quote from "../components/Quote.jsx";
import SteamLogo from "../components/SteamLogo.jsx";
import NewsContainer from "../layouts/NewsContainer.jsx";



function LandingPage() {
    return (
    <div className=" static grid">
    <div className=" bg-fill">
        <BgVid/>
        </div>
    <div>
        <NavBar/>
    </div>
    <div className=" absolute flex-row my-48 ms-10"><Quote/></div>
    <div className="absolute flex-col -bottom-1 mb-96 ms-10"><SteamLogo/></div>
    <h6 className="absolute flex-col -bottom-1 mb-96 ms-10 text-white ps-14">DOWNLOAD ON STEAM</h6>

    <div className =" relative "><NewsContainer/></div>


    </div>
    );
  }
  
  export default LandingPage;