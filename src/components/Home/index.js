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
        >Hello,
        </p>

        <p
          data-aos="fade-down"
          data-aos-offset="200"
          data-aos-delay="250"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="presentation-text"
        >I'm Virgile,
        </p>

        <p
          data-aos="fade-down"
          data-aos-offset="200"
          data-aos-delay="300"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="presentation-text"
        >Web Front Developer
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
      <p className="home-body-text">My expertise is mainly based on my experiences
        with entrepreneurs or developers with whom
        I was able to work.
        Freshly graduated, I am currently <span className="lookingJob">looking for a job</span>.
      </p>
    </div>
    <div className="home-footer">

      <Link to="/about" type="button" className="footer-about link">About</Link>
      <Link to="#" type="button" className="footer-skills link">Skills</Link>

    </div>
  </div>
);

export default Home;
