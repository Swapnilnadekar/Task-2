import React from 'react';
import "./Header.css";


const Header =(props)=> {

  return (
      <div className="nav_bar">
          <h3>LestsGrowMore</h3>
          <button onClick={props.function} className="btn_con">Get Users</button>
      </div>
  )
};

export default Header;
