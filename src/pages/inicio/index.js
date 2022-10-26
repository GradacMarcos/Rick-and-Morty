// Ya creada la pagina ahora toca crear el componente
import { Grid } from "@mui/material";
import * as React from "react";
import MyCard from "../../components/Card";
import Navbar from "../../components/navbar";
import { fetchData } from "../../utils/fetchs";
import "./inicio.scss";
import Footer from "../../components/Footer";

function Inicio() {
  const [data, setData] = React.useState(null);
  const [images, setImages] = React.useState([1, 2, 3, 4, 5, 6]);
  const [titles, setTitles] = React.useState([]);

  React.useEffect(() => {
    fetchData("https://rickandmortyapi.com/api/character", (data) => {
      console.log(data);
      let imgs = [];
      let names = [];
      for (let i = 0; i < 6; i++) {
        const aleatory = Math.floor(Math.random() * (data.results.length - 1));
        const img = data.results[aleatory].image;
        const name = data.results[aleatory].name;
        imgs.push(img);
        names.push(name);
      }
      setImages(imgs);
      setTitles(names);
      setData(data);
    });
  }, []);

  return (
    <div className="Inicio">
      <Navbar showSearch={false} />
      <h1 className="title">The Rick and Morty</h1>
      <Grid container className="cards">
        {images.map((img, i) => {
          return (
            <MyCard
              isLoading={data ? false : true}
              imgsrc={img}
              subtitle="subtitulo"
              title={titles[i]}
              position="horizontal"
            />
          );
        })}
      </Grid>
      <Footer />
    </div>
  );
}

export default Inicio;
