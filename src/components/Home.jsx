import { useState } from "react";
import "../App.css";
import hero from "../hero.webp";
import getstart from "../getstart.webp";
import { Link } from "react-router-dom";

function Home() {
  const [count, setCount] = useState(0);
  const handleButtonClick = () => {
    window.scrollTo({ top: 1000, behavior: "smooth" });
  };

  return (
    <div className="home">
      <div className="navbar">
        <div className="leftnav">
          <div className="logo">
            <img className="imagee" src="./logo.png" alt="" />
          </div>
          <div className="title">Ethereal</div>
        </div>
        <div className="rightnav">
          <div className="rightcontent">
            <button onClick={handleButtonClick} className="gtbutton">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="contentimg">
          <img src={hero} alt="" />
        </div>
        <div className="introcontent">
          <div className="ictitle">
            <div className="tiitle">Welcome To Ethereal</div>
            <div className="iccontent">
              Ethereal is the community-run technology powering the
              cryptocurrency ether (ETH) and thousands of decentralized
              applications.
            </div>
          </div>
        </div>
      </div>
      <div className="getstarted">
        <div className="gsleft">
          <div className="gstitle">Get started</div>
          <div className="gslcontent">
            ethereum.org is your portal into the world of Crypto. The tech is
            new and ever-evolving – it helps to have a guide. Here's what we
            recommend you do if you want to dive in.
          </div>
          <div className="teleport">
            <Link to="/tracker">Go to Tracker</Link>
          </div>
        </div>
        <div className="gsright">
          <img src={getstart} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
