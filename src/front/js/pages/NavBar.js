import React from 'react'
import {Link} from 'react-router-dom'

export  function NavBar() {

  return (
      <div id="navbar" >
        <nav className="navbar navbar-expand-lg ">
        <div className="container">
            
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                
                <Link className="nav-link" to="/metaverse">MetaVerse</Link>
                <Link className="nav-link" to="/">NFT's</Link>
                <a className="nav-link ">Gaming</a>
            </div>
            </div>
        </div>
        </nav>
      </div>
  )}

