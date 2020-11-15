import React from 'react';
import PropTypes from 'prop-types';
import './card.scss';
import ModalInfo from 'src/components/ModalInfo';

const Card = ({
  id, year, title, image, description, path, item, longDescription1,longDescription2,longDescription3,longDescription4, techno1, techno2, techno3, techno4, techno5
}) => (
  <div className="card">
    <p className="card-year">{year}</p>
    <h1 className="card-title">{title}</h1>
    <div className="div-img">
      <img className="card-img" src={image} alt="theme de la carte" />
    </div>
    <p className="card-description">{description}</p>
    <ModalInfo key={id} year={year} title={title} image={image} description={description} longDescription1={longDescription1} longDescription2={longDescription2} longDescription3={longDescription3} longDescription4={longDescription4} techno1={techno1} techno2={techno2} techno3={techno3} techno4={techno4} techno5={techno5}/>

  </div>
);

Card.propTypes = {
  year: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default Card;
