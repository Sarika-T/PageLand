import React from 'react';
import HeroBlock from '../HomePage/Homepage';
import TwoColumnRow from '../HomePage/Content';
import ImageGrid from '../HomePage/Last';
import './Pages.scss';

const layoutConfig = [
  { type: 'hero', id: 1 },
  { type: 'two-column', id: 2 },
  { type: 'image-grid', id: 3 },
];

const content = {
  hero: {
    heading: 'Your Future Starts Here',
    subtitle: 'Craft dynamic pages with ease.',
    cta: 'Start Building',
    backgroundImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF2Onym1ws0KjnXeL4vDXlgQBCTSwgdueQSQ&s',
  },
  'two-column': {
    heading: 'Built for Developers',
    subtitle: 'Drag‑and‑drop flexible layouts with live preview.',
    cta: 'Try It Now',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_l9NSgQgVhGvpUkHJfQtR-Y9jCFK19rDNSQ&s',
  },
  'image-grid': {
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyA4hKbAA0yOvqPuYtmR8i7A_2FGynoMfNTw&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1mQ01DUs2Gx4vMU5MzV8v9b4yQH3wy03xRQ&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFESjjlMxOGDKOAEZNjoIT8w5kSgN6YUIkQQ&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKFtC5R6N1jeDSVF9Iz3xg5SeFXi7y8rpKIQ&s',
    ],
  },
};


const LandingPage2 = () => {
  const renderBlock = (block) => {
    const data = content[block.type];

    if (!data) {
      console.warn(`Missing content for block type: ${block.type}`);
      return null;
    }

    switch (block.type) {
      case 'hero':
        return <HeroBlock key={block.id} data={data} />;
      case 'two-column':
        return <TwoColumnRow key={block.id} data={data} />;
      case 'image-grid':
        return <ImageGrid key={block.id} data={data} />;
      default:
        return null;
    }
  };

  return (
    <div className="landing-page">
      <header className="nav">
        <a href="/landing/page-1">Page 1</a>
        <a href="/landing/page-2" className="active">Page 2</a>
      </header>
      <main className="content">
        {layoutConfig.map((block) => renderBlock(block))}
      </main>
    </div>
  );
};

export default LandingPage2;

