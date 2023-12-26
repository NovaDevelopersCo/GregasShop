import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from "./Pagination.module.scss";

export const Pagination = ({currentPage ,page, onChangePage}) => {
  return (
    <div>
      <ReactPaginate
        className={styles.root}
        breakLabel="..."
        nextLabel=">"  
        previousLabel="<"
        onPageChange={(event) =>  onChangePage(event.selected + 1)}
        pageRangeDisplayed={5}
        pageCount={page}
        forcePage={currentPage - 1}
        renderOnZeroPageCount={null}
      />
    </div>
  );
};
