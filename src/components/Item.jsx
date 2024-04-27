import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export const Item = ({ item }) => {
  return (
    <div className="container-card">
      <Card className=".card" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={item.imageURL} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>{item.price}</Card.Text>
          <Card.Text>{item.categoryid}</Card.Text>
          <Link to={`/item/${item.id}`}>
            <Button variant="primary">Detalle.</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};
