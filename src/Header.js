import React, { Component } from "react";
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div>
               <h1 align="center" className="title">Arpina</h1>
               <br />
               <br />
                <h4 align="center" className="title2"> Check the weather in cities around the world..  </h4>
            </div>
        )
    }
}

export default Header;