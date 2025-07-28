import React from 'react';
import './Homepage.scss';

const HeroBlock = ({ data }) => (
  <section className="hero">
    <div className="hero-overlay">
      <h1>{data.heading || 'Hero Heading'}</h1>
      <p>{data.subtitle || 'Subtitle'}</p>
      {data.cta && <a href={data.cta.link}>{data.cta.text}</a>}
    </div>
  </section>
);

export default HeroBlock;

