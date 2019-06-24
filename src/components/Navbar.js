import React, {Component} from 'react';
import {Link, NonLink} from 'react-router-dom';

class Navbar extends Component {
    render () {
        return (
           <nav className="nav-wrapper red darken-3">
                <div className="container">
                <a className="brand-logo"> Poke Time's</a>
                <ul className="right">
                    {/* <li><a href="/"> Home</a></li>
                    <li><a href="/about"> About</a></li>
                    <li><a href="/contact"> Contact</a></li> */}

                    <li><Link to="/"> Home</Link></li>
                    <li><Link to="/contact"> Contact</Link></li>
                    <li><Link to="/about"> About</Link></li>
                </ul>
            </div>
           </nav>
        )
    }
}

export default Navbar