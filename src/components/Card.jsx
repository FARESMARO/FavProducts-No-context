import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "../App.css";

export default function RecipeReviewCard({ products, setFav, Fav }) {
  function Add() {
    //if it already exist
    if (Fav.includes(products)) {
      setFav(Fav);
    } else {
      setFav([...Fav, products]);
    }
  }

  function Remove(i) {
    const Favlist = [...Fav];
    Favlist.splice(i, 1);
    setFav(Favlist);
  }
  return (
    <div>
      <Card className="card" sx={{ Width: 354 }}>
        <CardMedia
          component="img"
          height="194"
          image={products.thumbnail}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {products.title}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon onClick={Add} />
          </IconButton>
          <IconButton aria-label="remove from favorites" onClick={Remove}>
            X
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
}
