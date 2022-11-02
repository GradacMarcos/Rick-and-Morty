import * as React from "react";
import { CardMedia, Grid, Skeleton } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import "./basic-card.scss";
import Text from "../Text";
import { CardActionArea } from "@mui/material";


export default function BasicCard(props) {
  const { title, subtitle, bodyText, position, isLoading, onClick } = props;

  let size = 0;
  if (position === "vertical") {
    size = 12;
  } else {
    size = 6;
  }
  return (
    <CardActionArea onClick={onClick}>
      <Grid className="BasicCard">
        <Grid item xs={size}>
          {isLoading ? (
            <Skeleton variant="rectangular" width={140} height={140} />
          ) : (
            <CardMedia />
          )}
        </Grid>
        <Card className="card" sx={{ minWidth: 275 }}>
          <CardContent>
            <Text variant="h5">{title}</Text>
            <Text sx={{ mb: 1.5 }}>{subtitle}</Text>
            <Text variant="body2"> {bodyText}</Text>
          </CardContent>
        </Card>
      </Grid>
    </CardActionArea>
  );
}
