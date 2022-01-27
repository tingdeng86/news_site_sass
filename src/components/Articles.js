import React from 'react';
import Article from './Article';
import { formatTitle } from '../utilities/utilities';
function Articles({newsData}) {
    return (
        <section className='articles-container'>
            {newsData.map((item,i) =>
                <Article key={i} src={item.urlToImage} description={item.description} 
                source={item.source} title={formatTitle(item.title)}
                ></Article>)}
        </section>
    );
}

export default Articles;
