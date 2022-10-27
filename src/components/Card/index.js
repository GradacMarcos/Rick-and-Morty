import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid, Skeleton } from "@mui/material";
import "./card.scss";

export default function MyCard(props) {
  // position debe ser "vertical" u "horizontal"
  // isLoading es un booleano que determina si la imagen esta cargando
  const { title, subtitle, imgsrc, position, isLoading, onClick } = props;

  let size = 0;
  if (position === "vertical") {
    size = 12;
  } else {
    size = 6;
  }

  return (
    <Card className="MyCard">
      <CardActionArea
      onClick={onClick}>
        <Grid className="card" container>
          <Grid item xs={size}>
            {isLoading ? (
              <Skeleton variant="rectangular" width={140} height={140} />
            ) : (
              <CardMedia
                component="img"
                height="140"
                image={imgsrc}
                alt="green iguana"
              />
            )}
          </Grid>
          <Grid className={"card-body-" + position} item xs={size}>
            <CardContent>
              {isLoading ? (
                <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
              ) : (
                <Typography gutterBottom variant="h5" component="div">
                  {title}
                </Typography>
              )}
              ¨
              {isLoading ? (
                <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
              ) : (
                <Typography variant="body2" color="text.secondary">
                  {subtitle}
                </Typography>
              )}
            </CardContent>
          </Grid>
        </Grid>
      </CardActionArea>
    </Card>
  );
}
