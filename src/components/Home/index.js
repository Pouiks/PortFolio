import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './home.scss';

const Home = () => (
  <div className="home">
    <div className="home-header">
      <div className="home-header-presentation">
        <p
          data-aos="fade-down"
          data-aos-offset="200"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="presentation-text"
        >Bienvenue,
        </p>

        <p
          data-aos="fade-down"
          data-aos-offset="200"
          data-aos-delay="250"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="presentation-text"
        >moi c'est Virgile,
        </p>

        <p
          data-aos="fade-down"
          data-aos-offset="200"
          data-aos-delay="300"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="presentation-text"
        >Développeur Web
        </p>
      </div>

      <div className="home-header-techno">
        <div className="techno1">
          <img
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="2800"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            src="/images/react.png"
            alt="logo react"
            className="techno-img-react techno"
          />

          <img
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="2600"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            src="/images/nodejs.png"
            alt="logo nodeJS techno"
            className="techno-img-node techno"
          />

          <img
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="2700"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            src="/images/sql.png"
            alt="logo SQL"
            className="techno-img-sql techno"
          />

          <img
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="2500"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            src="/images/javascript.png"
            alt="logo javascript techno"
            className="techno-img-js"
          />
        </div>
        <div className="techno2">
          <img
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="2700"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            src="/images/api.png"
            alt="logo SQL"
            className="techno-img-api techno"
          />

          <img
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="2800"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            src="/images/postgresql.png"
            alt="logo react"
            className="techno-img-psql techno"
          />
        </div>
        <div className="techno2">
          <img
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="2700"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            src="/images/git.png"
            alt="logo SQL"
            className="techno-img-api techno"
          />

        </div>
      </div>
    </div>

    <div className="home-body">
      <p className="home-body-text">
Mon expertise repose principalement sur mes expériences avec des entrepreneurs ou des développeurs avec lesquels j'ai pu travailler. Fraîchement diplômé, je suis actuellement à la  <span className="lookingJob">recherche d'un emploi</span>.
      </p>
    </div>
    <div className="home-footer ">

      <Link to="/about" type="button" className="footer-about link">Mon parcours</Link>
      <Link to="skills" type="button" className="footer-skills link">Compétences</Link>
      <Link to="/projects" type="button" className="footer-skills link"> Mes Projets</Link>

    </div>
  </div>
);

export default Home;
