import * as React from "react";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import "./basic-card.scss";
import Text from "../Text";

export default function BasicCard(props) {
  const { title, subtitle, bodyText } = props;
  return (
    <Grid className="BasicCard">
      <Card className="card" sx={{ minWidth: 275 }}>
        <CardContent>
          <Text variant="h5">{title}</Text>
          <Text sx={{ mb: 1.5 }}>{subtitle}</Text>
          <Text variant="body2"> {bodyText}</Text>
        </CardContent>
      </Card>
    </Grid>
  );
}
