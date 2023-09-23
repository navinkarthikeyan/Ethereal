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
              Welcome to the future of financial monitoring! Our Ethereal
              [Cryptocoin Price Tracker] provides real-time insights into the
              dynamic world of digital currencies, helping you stay ahead of
              market trends.
            </div>
          </div>
        </div>
      </div>
      <div className="getstarted">
        <div className="gsleft">
          <div className="gstitle">Get started</div>
          <div className="gslcontent">
            etherealapp is your portal into the world of Crypto. The tech is new
            and ever-evolving – it helps to have a guide. dive in to ethereal
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
