import Axios from "axios";
import React, { useEffect, useState } from "react";
import {Card, CardActionArea, CardActions,  CardContent,CardMedia, Button } from "@material-ui/core";
import Image1 from "../../Assets/Image/img1.jpg";



export default function ImgMediaCard() {
  const [article, setArticle] = useState([]);
  console.log(article);
  useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setArticle(res.data);
    });
  });
  return (
    <div>
      {article.map((item) => (
        <Card className="rootArticle">
          <CardActionArea className="cardArea">
            <h1 className="title">{item.name}</h1>
            <CardContent className="cardContent">
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image={Image1}
                title="Contemplative Reptile"
                className="cardMedia"
              />
              <span
                variant="body2"
                color="textSecondary"
                component="p"
                className="cardDesc"
              >
                {item.address.street}
                {" " + item.address.suite + " "}
                {item.address.city + " "}
                {item.address.zipcode + " "}
                {item.address.geo.lat + " "}
                {item.address.geo.lng + " "}
                {item.company.name + " "}
                {item.company.catchPhrase + " "}
                {item.company.bs + " "}
              </span>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
