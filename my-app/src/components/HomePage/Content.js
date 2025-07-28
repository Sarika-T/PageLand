import React from 'react';

export default function TwoColumnRow ({ data }) {
    return(
    <section className="twocol">
        <div className="left">
        <h2>{data.heading || 'Heading'}</h2>
        <p>{data.subtitle || 'Subtitle'}</p>
        {data.cta && <a href={data.cta.link}>{data.cta.text}</a>}
        </div>
        <div className="right">
        {data.image && <img src={data.image} alt="" />}
        </div>
    </section>
    );

}


