import * as React from "react";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./basic-card.scss";

export default function BasicCard(props) {
  const { title, subtitle, bodyText } = props;
  return (
    <Grid className="BasicCard">
      <Card className="card" sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {subtitle}
          </Typography>
          <Typography variant="body2"> {bodyText}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
