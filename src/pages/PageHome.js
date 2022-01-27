import React from 'react';
import { useState, useEffect } from 'react';
import TopArticle from '../components/TopArticle';
import { formatTitle } from '../utilities/utilities';
import Articles from '../components/Articles';

function PageHome() {
    const [error, setError] = useState(null);
    const [hero, setHero] = useState({})
    const [articles, setArticles] = useState([])

   
    const fetchNews = async () => {
        try {
            const response = await fetch('./top-headlines.json')
            const responseJson = await response.json()
            const hero = responseJson.articles[0]
            const news = responseJson.articles.slice(1, 13)
            setHero(hero)
            setArticles(news)
            console.log(responseJson)
            
        } catch (e) {
            setError(e)
            
        }
    }

    useEffect(() => {
        fetchNews()
    }, []);
    return (
        <main>
            <section>
            {error ? <div>Error: {error.message}</div> :
                <div>               
                <TopArticle src={hero.urlToImage} source={hero.url} title={formatTitle(hero.title)} />
                <Articles newsData={articles}/>
                </div>}
            </section>
        </main>
    );
}

export default PageHome;
