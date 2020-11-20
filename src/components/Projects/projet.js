import React from 'react';
import ModalProject from 'src/components/ModalProject';
import './projects.scss';

const Projet = ({
  link,
  title,
  image,
  h3,
  h4,
  description,
}) => (
  <div className="projet">
    <a href={link} target="_blank" className="projet-title">{title}</a>
    <div className="card-project">
      <img className="card-project-img" src={image} alt="Projet" />
      <div className="card-projet-text">
        <h3 className="card-projet-h3">{h3}</h3>
        <h4 className="card-projet-h4">{h4}</h4>
        <p className="card-projet-desc">{description}</p>
          <ModalProject link={link} title={title} image={image} h3={h3} h4={h4} description={description} />
      </div>
    </div>
  </div>
);

export default Projet;
