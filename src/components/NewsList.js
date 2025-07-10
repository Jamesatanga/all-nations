import React, { useEffect, useState } from 'react';

function NewsList() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace YOUR_NEWSAPI_KEY with your actual NewsAPI key
    fetch('https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apiKey=YOUR_NEWSAPI_KEY')
      .then(res => res.json())
      .then(data => {
        setArticles(data.articles || []);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!articles.length) return <p>No news to show.</p>;

  return (
    <div>
      {articles.map((article, idx) => (
        <div key={idx} className="news-card">
          {article.urlToImage && <img src={article.urlToImage} alt={article.title} />}
          <h2><a href={article.url} target="_blank" rel="noopener noreferrer">{article.title}</a></h2>
          <p>{article.description}</p>
        </div>
      ))}
    </div>
  );
}

export default NewsList;