import React, { useState, useEffect } from 'react';
import axios from 'axios';
import usePromise from '../../lib/usePromise';
import NewsListBlock from './NewsListBlock';
import NewsItem from '../NewsItem';

function NewsList({ category }) {
  const [loading, response, error] = usePromise(() => {
    const query = category === 'all' ? '' : `&category=${category}`;
    const response = axios.get(
      `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=dd4b48474e0f4f7fa8a2acf29f5ad944`,
    );

    return response;
  }, [category]);

  if (loading) {
    return <NewsListBlock>대기 중...</NewsListBlock>;
  }

  // 아직 articles 값이 설정되지 않았을 때
  if (!response) {
    return null;
  }

  if (error) {
    return <NewsListBlock>에러 발생!!</NewsListBlock>;
  }

  //articles 값이 유효
  const { articles } = response.data;
  return (
    <NewsListBlock>
      {articles.map(article => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
}

export default NewsList;
