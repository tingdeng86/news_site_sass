import React from 'react';

function Article({src, title,description,source}) {
    return (
        <div className='article'>
            <figure>
                <img src={src} alt={title} />
            </figure>
            <div className='details'>
                <h2>{title}</h2>
                <p>{description}</p>
                <a href={source}>Read More</a>
            </div>
        </div>
    );
}

export default Article;
