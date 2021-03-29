import Axios from "axios";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Image1 from "../../Assets/Image/img1.jpg";

const useStyles = makeStyles({
  root: {
    width: 700,
    textAlign: "center",
    margin: "0 auto",
    backgroundColor: "#fff",
  },
  cardArea: {
    // backgroundColor:"red",
    height: "300px",
  },
  title: {
    width: "100%",
    fontSize: "30px",
    fontWeight: 500,
    lineHeight: "16px",
    padding: "5px 0 ",
  },
  cardContent: {
    width: "100%",
  },
  cardMedia: {
    float: "left",
    width: "30%",
  },
  cardDesc: {
    float: "left",
    width: "70%",
    fontSize: "16px",
    padding: "0 10px",
    textAlign: "left",
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();
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
        <Card className={classes.root}>
          <CardActionArea className={classes.cardArea}>
            <h1 className={classes.title}>{item.name}</h1>
            <CardContent className={classes.cardContent}>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image={Image1}
                title="Contemplative Reptile"
                className={classes.cardMedia}
              />
              <span
                variant="body2"
                color="textSecondary"
                component="p"
                className={classes.cardDesc}
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
