import { Grid } from "@mui/material";
import React from "react";
import Navbar from "../../components/navbar";
import { fetchData } from "../../utils/fetchs";
import BasicCard from "../../components/BasicCard";
import Footer from "../../components/Footer";

export default function Episodios() {
  //paso 1
  const [data, setData] = React.useState(null);
  const [search, setSearch] = React.useState("");

  //paso 3
  React.useEffect(() => {
    fetchData("https://rickandmortyapi.com/api/episode/?name=" + search, (apiResponse) => {
      setData(apiResponse); 
    });
  }, [search]);
  function searchFunction(s) {
    setSearch(s);
  }

  //paso 2
  return (
    <Grid className="episodios">
      <Navbar searchFunction={searchFunction} />
      <h1>Episodios</h1>
      <Grid container className="cards">
        {data?.results.map((e) => (
          <Grid item xs={4}>
            <BasicCard
              title={"Nombre: " + e.name}
              subtitle={"Fecha de lanzamiento: " + e.air_date}
              bodyText={"Episodio: " + e.episode}
            />
          </Grid>
        ))}
      </Grid>
      <Footer />
    </Grid>
  );
}
