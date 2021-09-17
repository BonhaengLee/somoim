import React from 'react';
import Pagination from 'react-js-pagination';
import styles from './Paging.module.scss';

const Paging = ({ page, count, setPage }): JSX.Element => (
  <Pagination
    activePage={page}
    itemsCountPerPage={12}
    totalItemsCount={count}
    pageRangeDisplayed={6}
    prevPageText="‹"
    nextPageText="›"
    onChange={setPage}
  />
);
export default Paging;
