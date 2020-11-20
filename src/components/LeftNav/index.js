import React from 'react';
import { Link } from 'react-router-dom';

import './leftnav.scss';

const LeftNav = () => (
  <div className="leftNav">
    <Link to="/">
      <img className="clickToHome" src="/images/home.png" alt="Retour à l'accueil" />
    </Link>
    <div className="leftNav-header">
      <Link to="/">
        <img className="leftNav-img" src="../images/virgile.jpg" alt="Virgile Joinville" />
      </Link>
      <p className="leftNav-job">Web Developer</p>
    </div>

    <a href="https://www.linkedin.com/in/virgilejoinville/" target="_blank" rel="noreferrer">
      <img href="https://www.linkedin.com/in/virgilejoinville/" target="_blank" rel="noreferrer" title="Profil Linkedin" className="linkedin" src="/images/linkedin.png" alt="Consulter le profil linkedin" />
    </a>
    <div className="imgGit">
      <a href="https://github.com/Pouiks" target="_blank" rel="noreferrer">
        <img className="github" src="/images/github.png" title="Profil GitHub" alt="Profil GitHub de Virgile Joinville" />
      </a>
      <p className="gitText">Github</p>
    </div>

    <div className="leftNav-footer">
      <p className="leftNav-download"> Resume</p>
      <a href="/documents/CV_devWeb_Virgile_Joinville.pdf" target="_blank" rel="noreferrer"><img src="/images/cv.png" alt="Cv de Virgile Joinville" className="cv" /></a>
    </div>
  </div>
);

export default LeftNav;
