import React, { useEffect } from 'react';

import ModalInfo from 'src/components/ModalInfo';
import data from '../../../data';
import Card from './card';
import './about.scss';
import './card.scss';

const About = () => {
  console.log(data);

  useEffect(() => {

  }, []);

  return (
    <div className="about transition">
      <h1 className="about-title">Let's talk about me 2 minutes</h1>
      <p className="about-description">
        Vous l'avez remarqué, moi c'est Virgile, j'ai soufflé ma 30ème bougies récemment.

        Il y a 4 ans, je ne connaissais rien ou presque au monde du web.
        Je me suis formé seul durant 2 années, ou j'ai pu entreprendre pleins de projets.

        Cette nouvelle passion prenait de plus en plus de temps
        jusqu'au moment ou j'ai décidé de completement changé de vie.
        Je vous en dis plus dans les cartes ci-dessous !
      </p>

      <div className="cards">
        {data.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>

    </div>
  );
};
export default About;
