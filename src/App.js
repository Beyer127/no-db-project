import React from "react";
import "./App.css";
import DraftPool from "./components/DraftPool";
import AddPlayer from "./components/AddPlayer";

function App() {
  return (
    <div className="nav-items">
      <nav className="header">
        <img className="nfl" src="https://static.www.nfl.com/image/upload/v1554321393/league/nvfr7ogywskqrfaiu38m.svg"/>
        <div id="nav">
          <a href="https://www.nfl.com/players/" class="nav">
            PLAYERS
          </a>
          <a href="*" class="nav">
            HOME
          </a>
          <a href="*" class="nav">
            CONTACT
          </a>
        </div>
      </nav>
      <div id="container">
        <h1>Draft Pool</h1>
        <ul>
          <DraftPool />
        </ul>
      </div>
        <div id="footer">
          <img className="footerImg" src="https://static.www.nfl.com/image/upload/v1554321393/league/nvfr7ogywskqrfaiu38m.svg"/>
          <br/>
          <p className="footer">© 2020 NFL Enterprises LLC. NFL and the NFL shield design are registered trademarks of the National Football League.The team names, logos and uniform designs are registered trademarks of the teams indicated. All other NFL-related trademarks are trademarks of the National Football League. NFL footage © NFL Productions LLC.</p> 
          <h3 className="footerPolicy">PRIVACY POLICY TERMS OF SERVICE</h3>    
        </div>
    </div>
  );
}

export default App;
