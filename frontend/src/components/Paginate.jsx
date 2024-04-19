import { Pagination } from "react-bootstrap";
const Paginate = ({ pages, pageNumber, setPageNumber, pageSize }) => {

  const handlePageChange = (pageNumber) => {
    setPageNumber(pageNumber);
  };
  return (
    pages > 1 && (
      <Pagination>
        {[...Array(pages).keys()].map((x) => (
          <Pagination.Item
            key={x + 1}
            active={x === pageNumber}
            onClick={() => handlePageChange(x)}
          >
            {x + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    )
  );
};

export default Paginate;
