import React from 'react';


const ImageGrid = ({ data }) => (

  <section className="grid">
    {data.images?.map((img, i) => (
      <img key={i} src={img} alt={`grid-${i}`} />
    ))}
  </section>
);

export default ImageGrid;

