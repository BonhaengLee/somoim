import React from 'react';
import Pagination from 'react-js-pagination';
import styles from './Paging.module.scss';

const Paging = ({ page, count, setPage }): JSX.Element => (
  <Pagination
    activePage={page}
    itemsCountPerPage={10}
    totalItemsCount={count}
    pageRangeDisplayed={5}
    prevPageText="‹"
    nextPageText="›"
    onChange={setPage}
  />
);
export default Paging;
