
import React from 'react';
import { useSelector } from 'react-redux';
import HeroBlock from '../HomePage/Homepage';
import TwoColumnRow from '../HomePage/Content';
import ImageGrid from '../HomePage/Last';
import './Pages.scss';

const LandingPage1 = () => {
  const layout = useSelector((s) => s.layout || []);

  return (
    <div className="landing-page">
      <header className="nav">
        <a href="/landing/page-1" className="active">Page 1</a>
        <a href="/landing/page-2">Page 2</a>
      </header>
      <main className="content">
        {layout.map((blk, i) => {
          const { type, data } = blk;
          switch (type) {
            case 'hero':
              return <HeroBlock key={i} data={data} />;
            case 'two-column':
              return <TwoColumnRow key={i} data={data} />;
            case 'image-grid':
              return <ImageGrid key={i} data={data} />;
            default:
              return null;
          }
        })}
      </main>
    </div>
  );
};

export default LandingPage1;
