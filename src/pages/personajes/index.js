import { Grid } from "@mui/material";
import MyCard from "../../components/card";
import React from "react";
import Navbar from "../../components/navbar";
import { fetchData } from "../../utils/fetchs";
export default function Personajes() {
  const [data, setData] = React.useState(null);
  console.log(data);

  React.useEffect(() => {
    fetchData("https://rickandmortyapi.com/api/character", (apiResponse) => {
      setData(apiResponse);
    });
  }, []);

  return (
    <Grid className="personajes">
      <Navbar />
      <h1>Personajes</h1>
      <Grid container className="personajes">
        {data?.results.map((e) => (
          <Grid item xs={4}>
            <MyCard
              title={e.name}
              subtitle={e.species}
              imgsrc={e.image}
              position="horizontal"
              isLoading={data ? false : true}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
