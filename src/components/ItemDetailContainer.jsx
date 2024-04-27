import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import { CartContext } from "../context/CartContext";
import { ItemCount } from "./ItemCount";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();

    const refDoc = doc(db, "items", id);

    getDoc(refDoc).then((snapshot) => {
      setItem({ id: snapshot.id, ...snapshot.data() });
    });
  }, [id]);

  if (!item) return null;

  return (
    <Container className="mt-4 detailContainer">
      <div>{item.title}</div>
      <div>{item.categoryid}</div>
      <div>{item.description}</div>
      <div>{item.price}</div>
      <div>Stock actual: {item.stock} unidades.</div>
      <img src={item.imageURL} alt={item.title} />

      <ItemCount item={item} />
    </Container>
  );
};
