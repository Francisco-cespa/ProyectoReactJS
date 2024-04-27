import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import Container from "react-bootstrap/Container";

import { ItemList } from "./ItemList";

import {
  getFirestore,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();

    let refCollection;

    if (!id) refCollection = collection(db, "items");
    else {
      refCollection = query(
        collection(db, "items"),
        where("categoryid", "==", id)
      );
    }

    getDocs(refCollection).then((snapshot) => {
      setProducts(
        snapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        })
      );
    });
  }, [id]);

  return (
    <Container className="mt-4 d-flex flex-wrap">
      <ItemList items={products} />
    </Container>
  );
};
