import { Grid } from "@mui/material";
import MyCard from "../../components/Card";
import React from "react";
import Navbar from "../../components/navbar";
import { fetchData } from "../../utils/fetchs";
import Footer from "../../components/Footer";
import { SideDrawer } from "../../components/SideDrawer";

export default function Personajes() {
  const [data, setData] = React.useState(null);
  const [search, setSearch] = React.useState("");
  const [drawerData, setDrawerData] = React.useState({
    open: false,
    title: "",
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
    <Grid className="personajes">
      <Navbar searchFunction={searchFunction} />
      <h1>Personajes</h1>

      <Grid container className="personajes">
        {data?.results.map((e) => (
          <Grid item xs={4}>
            <MyCard
              onClick={() => {
                setDrawerData({
                  open: true,
                  title: e.name,
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
        <h1>aca va el cuerpo</h1>
      </SideDrawer>
      <Footer />
    </Grid>
  );
}
