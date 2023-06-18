import "../index.css"
import BgVid from "../components/BgVid.jsx";
import NavBar from "../layouts/NavBar.jsx";
import Quote from "../components/Quote";

function LandingPage() {
    return (
    <div className="grid">
    <div className=" bg-fill">
        <BgVid/>
        </div>
    <div>
        <NavBar/>
    </div>
    <div className=" absolute flex-row my-52 ms-10"><Quote/></div>
    </div>
    );
  }
  
  export default LandingPage;