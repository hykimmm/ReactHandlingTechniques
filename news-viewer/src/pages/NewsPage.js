import React from 'react';
import Categories from '../components/Categories/index';
import NewsList from '../components/NewsList/index';

function NewsPage({ match }) {
  const category = match.params.category || 'all';

  return (
    <>
      <Categories />
      <NewsList category={category} />
    </>
  );
}

export default NewsPage;
