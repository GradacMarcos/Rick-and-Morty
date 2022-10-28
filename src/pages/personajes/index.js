import { CardMedia, Grid } from "@mui/material";
import MyCard from "../../components/Card";
import React from "react";
import Navbar from "../../components/Navbar";
import { fetchData } from "../../utils/fetchs";
import Footer from "../../components/Footer";
import { SideDrawer } from "../../components/SideDrawer";
import "./personajes.scss";
import Text from "../../components/Text";

export default function Personajes() {
  const [data, setData] = React.useState(null);
  const [search, setSearch] = React.useState("");
  const [drawerData, setDrawerData] = React.useState({
    open: false,
    title: "",
    imgsrc: "",
    species: "",
  });
  React.useEffect(() => {
    fetchData(
      "https://rickandmortyapi.com/api/character/?name=" + search,
      (apiResponse) => {
        setData(apiResponse);
      }
    );
  }, [search]);
  function searchFunction(s) {
    setSearch(s);
  }
  return (
    <Grid className="Personaje">
      <Navbar searchFunction={searchFunction} />
      <h1>Personajes</h1>

      <Grid container className="personajes">
        {data?.results.map((e) => (
          <Grid item xs={4}>
            <MyCard
              onClick={() => {
                setDrawerData({
                  imgsrc: e.image,
                  open: true,
                  title: e.name,
                  species: e.species,
                });
              }}
              title={e.name}
              subtitle={e.species}
              imgsrc={e.image}
              position="horizontal"
              isLoading={data ? false : true}
            />
          </Grid>
        ))}
      </Grid>
      <SideDrawer
        title={drawerData.title}
        open={drawerData.open}
        setOpen={(ps) => setDrawerData({ ...ps, open: false })}
      >
        <Grid className="sideDrawer">
          <CardMedia
            component="img"
            height="100"
            image={drawerData.imgsrc}
            alt="green iguana"
          />
          <Grid className="especies" container>
            <Text variant="body">Especie:</Text>
            <Grid item xs={12}>
              <Text variant="h4">{drawerData.species}</Text>
            </Grid>
          </Grid>
        </Grid>
      </SideDrawer>
      <Footer />
    </Grid>
  );
}
