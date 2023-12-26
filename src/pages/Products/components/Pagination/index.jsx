import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from "./Pagination.module.scss";

export const Pagination = ({currentPage , onChangePage}) => {

  return (
    <div>
      <ReactPaginate
        className={styles.root}
        breakLabel="..."
        nextLabel=">"  
        previousLabel="<"
        onPageChange={(event) =>  onChangePage(event.selected + 1)}
        pageRangeDisplayed={6}
        pageCount={3}
        forcePage={currentPage - 1}
        renderOnZeroPageCount={null}
      />
    </div>
  );
};
