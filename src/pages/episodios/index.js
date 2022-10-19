import { Grid } from "@mui/material";
import React from "react";
import MyCard from "../../components/card";
import Navbar from "../../components/navbar";
import { fetchData } from "../../utils/fetchs";

export default function Episodios() {
  //paso 1
  const [data, setData] = React.useState(null);
  console.log(data);

  //paso 3
  React.useEffect(() => {
    fetchData("https://rickandmortyapi.com/api/episode", (apiResponse) => {
      setData(apiResponse);
    });
  }, []);

  //paso 2
  return (
    <Grid className="episodios">
      <Navbar />
      <h1>Episodios</h1>
      {data?.results.map((e) => (
        <MyCard
          title={e.name}
          position="vertical"
        />
      ))}
    </Grid>
  );
}
