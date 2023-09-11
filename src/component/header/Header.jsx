import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './header.css'

const header = () => {
  return (
    <nav className="innerWidth paddings navbar navbar-expand-lg">
      <a className="navbar-brand text-white logo " href="#">
        <img className = "img_logo"src="logo.png" alt="" />
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse " id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto gap">
          <li className="nav-item active margin-top">
            <a className="link-tx h-co-tx" href="#">Residencies</a>
          </li>
          <li className="nav-item margin-top">
            <a className="link-tx h-co-tx" href="#">Our Value</a>
          </li>
          <li className="nav-item margin-top">
            <a className="link-tx h-co-tx" href="#">Contact Us</a>
          </li>
          <li className="nav-item margin-top">
            <a className="link-tx h-co-tx" href="#">Get Started</a>
          </li>
          <button className="button-txt text-white marin-top1" type="button">
            Contact
          </button>
        </ul>
      </div>
    </nav>
  )
}

export default header