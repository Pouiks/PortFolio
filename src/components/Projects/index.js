import React from 'react';
import Projet from 'src/components/Projects/projet';
import projet from '../../../projets';

import './projects.scss';

const Projects = () => (
  <div className="projects transition">
    <div className="projects-title">

      <h1>Mes Projets</h1>
      <p className="spanDescr"> Pour plus d'informations, découvrez les projets</p>
    </div>

    <div className="projects-div">
      {projet.map((item) => (
        <Projet key={item.id} {...item} />
      ))}
    </div>
  </div>
);

export default Projects;
