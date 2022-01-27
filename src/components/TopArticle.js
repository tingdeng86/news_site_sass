import React from 'react';

function TopArticle({src,title,source}) {
    return (
            <article className='hero'>
                <figure>
                    <img src={src} alt={title} />
                </figure>
                <div className='info'>
                    <h2>{title}</h2>
                    <a href={source}>Read More</a>
                </div>
            </article>
    );
}

export default TopArticle;
