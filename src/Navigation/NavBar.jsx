import React from 'react';
import './NavBar.css'
const NavBar = () => {
  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2 z-2 position-fixed w-100">
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="true"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse"  id="navbarNav">
        <div className='d-flex' style={{flex:'1'}} ></div>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
            <a className="nav-link"  href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#service">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#experience">Experince</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#projects">Projects</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">Contact</a>
          </li>
        </ul>
        <div className='d-flex' style={{flex:'1'}} ></div>
      </div>
    </nav>
  );
};

export default NavBar;




// Hey, I'm Charles Bruyerre and I use Sharlee as my nickname on social media. I am a graphic designer, UX/UI designer and front-end web developer. Passionate about pop music, I like to create portraits and universes around what I listen to and I am always curious to learn more about new technologies and creative coding.