import React, { useEffect, useState } from "react";
import RecipeReviewCard from "./Card";
import axios from "axios";
import "../App.css";
// import { FavoritesList } from "../context/FavContextProvider";

export default function Home() {
  const [Products, setProducts] = useState([]);
  const [Fav, setFav] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setProducts(res.data.products.slice(0, 10));
      })
      .catch((err) => {
        setError("error");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2 className="text-center">Latest Products</h2>
      <hr />
      <div className="row">
        {loading ? (
          <p>loading...</p>
        ) : (
          Products.map((e, id) => {
            return (
              <RecipeReviewCard
                products={e}
                key={id}
                setFav={setFav}
                Fav={Fav}
              />
            );
          })
        )}
      </div>
      <h2>Favorites</h2>
      <hr />
      <div className="FavRow">
        {loading ? (
          <p>loading...</p>
        ) : (
          Fav.map((e, id) => {
            return (
              <RecipeReviewCard
                products={e}
                key={id}
                setFav={setFav}
                Fav={Fav}
              />
            );
          })
        )}
      </div>
    </div>
  );
}
