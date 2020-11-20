import React from 'react';
import PropTypes from 'prop-types';
import './card.scss';
import ModalInfo from 'src/components/ModalInfo';

const Card = ({
  id,
  year,
  title,
  image,
  description,
  path,
  item,
  longDescription1,
  longDescription2,
  longDescription3,
  longDescription4,
  techno1,
  techno2,
  techno3,
  techno4,
  techno5,
}) => (
  <div className="card">
    <h1 className="card-title">{title}</h1>
    <p className="card-year">{year}</p>
    <div className="div-img">
      <img className="card-img" src={image} alt="theme de la carte" />
    </div>

    <p className="card-description">{description}</p>
    <ModalInfo
      key={id}
      year={year}
      title={title}
      image={image}
      description={description}
      longDescription1={longDescription1}
      longDescription2={longDescription2}
      longDescription3={longDescription3}
      longDescription4={longDescription4}
      techno1={techno1}
      techno2={techno2}
      techno3={techno3}
      techno4={techno4}
      techno5={techno5}
    />

  </div>
);

Card.propTypes = {
  year: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  item: PropTypes.string.isRequired,
  longDescription1: PropTypes.string.isRequired,
  longDescription2: PropTypes.string.isRequired,
  longDescription3: PropTypes.string.isRequired,
  longDescription4: PropTypes.string.isRequired,
  techno1: PropTypes.string.isRequired,
  echno2: PropTypes.string.isRequired,
  techno3: PropTypes.string.isRequired,
  techno4: PropTypes.string.isRequired,
  techno5: PropTypes.string.isRequired,
};

export default Card;
