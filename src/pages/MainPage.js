import React from 'react';
import {Link} from 'react-router-dom';
import BannerImage from "../assets/Background.jpg";

function MainPage() {
  return (
    <div className="main">
      <div className="headerContainer"
       style={{ backgroundImage: "url('BannerImage')" }}>
        <h1>Portal "Hot wheels"</h1>
        <p>tekst podstawowy</p>
        <Link to="/menu">
        <button>przyczysk 1</button>
        </Link>
      </div>
    </div>
  )
}

export default MainPage