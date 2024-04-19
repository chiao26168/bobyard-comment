import { useState } from "react";
import { Row, ListGroup, Col, Button } from "react-bootstrap";
import {
  useGetCommentsQuery,
  useCreateCommentMutation,
} from "../slices/commentsApiSlice";
import { BsVectorPen } from "react-icons/bs";
import Comment from "../components/Comment";
import Paginate from "../components/Paginate";
export const CommentScreen = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const { data, isLoading, error, refetch } = useGetCommentsQuery({
    pageNumber,
    pageSize,
  });

  const [createComment, { isLoading: loadingCreate }] =
    useCreateCommentMutation();
  const createCommentHandler = async () => {
    if (window.confirm("Are you sure you want to create a new comment? ")) {
      try {
        await createComment({text: "New comment"});
      } catch (err) {
        console.log(err?.data?.message || err.error);
      }
    }
  };
  return (
    <>
      <Row>
        <Col md={10} />
        <Col className="text-end">
          <Button className="my-3" onClick={createCommentHandler}>
            <BsVectorPen /> Create Comment
          </Button>
        </Col>
      </Row>
      {loadingCreate && "Loading ..."}
      {isLoading ? (
        <h1>Loading ... </h1>
      ) : error ? (
        <div>{error?.data?.message || error.error}</div>
      ) : (
        <Row>
          <ListGroup variant="flush">
            {data.rows.map((comment) => (
              <ListGroup.Item key={comment.id}>
                <Comment comment={comment} />
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Row>
      )}
      <Paginate
        pageNumber={data?.pageNumber || pageNumber}
        pages={data?.pages}
        setPageNumber={setPageNumber}
        pageSize={pageSize}
      />
    </>
  );
};
