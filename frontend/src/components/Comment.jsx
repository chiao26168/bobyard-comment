import { BsHeartFill } from "react-icons/bs";
import { Row, Col } from "react-bootstrap";
import { BsTrash } from "react-icons/bs";
const Comment = ({ comment }) => {
  return (
    <>
      <Row>
        <strong>{comment.author}</strong>
        <Col md={10}>
          <p>{comment.text}</p>
        </Col>
        <Col md={2} className="text-end">
          <p>{comment.date.substring(0, 10)}</p>
        </Col>
      </Row>
      <Row>
        <Col md={10}></Col>
        <Col md={1} className="text-end"><BsTrash /></Col>
        <Col md={1} className="text-end">{comment.likes} <BsHeartFill /></Col>
      </Row>
    </>
  );
};

export default Comment;
