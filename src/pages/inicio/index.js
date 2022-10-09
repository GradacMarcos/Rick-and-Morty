// Ya creada la pagina ahora toca crear el componente
import { Grid, LinearProgress } from "@mui/material";
import * as React from "react";
import MyCard from "../../components/card";
import "./inicio.scss";

function Inicio() {
  const [data, setData] = React.useState(null);
  console.log(data);
  return (
    <div className="Inicio">
      <h1 className="title">The Rick and Morty</h1>
      <Grid container className="cards">
        <MyCard
          isLoading
          imgsrc="https://rickandmortyapi.com/api/character/avatar/15.jpeg"
          subtitle="subtitulo"
          title="Titulo"
          position="horizontal"
        />
        <MyCard
          isLoading
          imgsrc="https://rickandmortyapi.com/api/character/avatar/15.jpeg"
          subtitle="subtitulo"
          title="Titulo"
          position="horizontal"
        />
        <MyCard
          isLoading
          imgsrc="https://rickandmortyapi.com/api/character/avatar/15.jpeg"
          subtitle="subtitulo"
          title="Titulo"
          position="horizontal"
        />
        <MyCard
          isLoading
          imgsrc="https://rickandmortyapi.com/api/character/avatar/15.jpeg"
          subtitle="subtitulo"
          title="Titulo"
          position="horizontal"
        />
        <MyCard
          isLoading
          imgsrc="https://rickandmortyapi.com/api/character/avatar/15.jpeg"
          subtitle="subtitulo"
          title="Titulo"
          position="horizontal"
        />
        <MyCard
          isLoading
          imgsrc="https://rickandmortyapi.com/api/character/avatar/15.jpeg"
          subtitle="subtitulo"
          title="Titulo"
          position="horizontal"
        />
      </Grid>
    </div>
  );
}

export default Inicio;
