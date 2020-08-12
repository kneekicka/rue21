import React from "react";
import "./Pagination.css";
import ReactPaginate from "react-paginate";

const PeoplePagination = (props: any) => {
  const handlePageClick = (data) => {
    props.paginate(data.selected + 1);
  };

  return (
    <div className="Items-pagination">
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        breakLabel={"..."}
        pageCount={Math.ceil(props.totalItems / props.itemsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        pageClassName={"page-item"}
        nextClassName={"page-item"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextLinkClassName={"page-link"}
        pageLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
        forcePage={props.active - 1}
      />
    </div>
  );
};

export default PeoplePagination;
