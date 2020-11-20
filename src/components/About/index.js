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
      <h1 className="about-title">Restrospective</h1>

      <div className="cards">
        {data.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>

    </div>
  );
};
export default About;
