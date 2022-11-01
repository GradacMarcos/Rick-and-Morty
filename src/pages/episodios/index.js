import { Grid } from "@mui/material";
import React from "react";
import Navbar from "../../components/Navbar";
import { fetchData } from "../../utils/fetchs";
import BasicCard from "../../components/BasicCard";
import Footer from "../../components/Footer";
import "./episodios.scss";
import { SideDrawer } from "../../components/SideDrawer";
import Text from "../../components/Text";

export default function Episodios() {
  //paso 1
  const [data, setData] = React.useState(null);
  const [search, setSearch] = React.useState("");
  const [drawerData, setDrawerData] = React.useState({
    open: false,
    name: "",
    air_date: "",
    episode: "",
  });

  //paso 3
  React.useEffect(() => {
    fetchData(
      "https://rickandmortyapi.com/api/episode/?name=" + search,
      (apiResponse) => {
        setData(apiResponse);
      }
    );
  }, [search]);
  function searchFunction(s) {
    setSearch(s);
  }

  //paso 2
  return (
    <Grid className="episodios">
      <Navbar searchFunction={searchFunction} />
      <h1 className="title">Episodios</h1>
      <Grid container className="cards">
        {data?.results.map((e) => (
          <Grid item xs={4}>
            <BasicCard
              onClick={() => {
                setDrawerData({
                  open: true,
                  name: e.name,
                  air_date: e.air_date,
                  episode: e.episode,
                });
              }}
              position="horizontal"
              title={"Nombre: " + e.name}
              subtitle={"Fecha de lanzamiento: " + e.air_date}
              bodyText={"Episodio: " + e.episode}
              isLoading={data ? false : true}
            />
          </Grid>
        ))}
      </Grid>
      <SideDrawer
        title={drawerData.name}
        open={drawerData.open}
        setOpen={(ps) => setDrawerData({ ...ps, open: false })}
      >
        <Grid className="sideDrawer">
          <Grid className="cuerpo">
            <Grid container>
              <Text variant="body">Nombre:</Text>
              <Grid item xs={12}>
                <Text variant="h4">{drawerData.name}</Text>
              </Grid>
              <Grid>
                <Text variant="body">Fecha de lanzamiento:</Text>
              </Grid>
              <Grid item xs={12}>
                <Text variant="h4">{drawerData.air_date}</Text>
              </Grid>
              <Grid>
                <Text variant="body">Episodio:</Text>
              </Grid>
              <Grid item xs={12}>
                <Text variant="h4">{drawerData.episode}</Text>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </SideDrawer>
      <Footer />
    </Grid>
  );
}
