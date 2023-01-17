import React, {useState} from 'react';
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import ReorderIcon from '@mui/icons-material/Reorder';
import "../styles/Navbar.css";

function Navbar() {

    const [openLinks, setOpenLinks] = useState(false);
    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    };

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} />
        <div className="hiddenLinks">
        <Link to="/"> Main </Link>
        <Link to="/offers"> You offers </Link>
        <Link to="/profile"> You profile </Link>
        <Link to="/obs"> Observed </Link>
        </div>
      </div>
      
      <div className="rightSide">
        <Link to="/"> Main </Link>
        <Link to="/offers"> You offers </Link>
        <Link to="/profile"> You profile </Link>
        <Link to="/obs"> Observed </Link>
        <button onClick={toggleNavbar}>
            <ReorderIcon />
        </button>
      </div>
    </div>
  )
}

export default Navbar