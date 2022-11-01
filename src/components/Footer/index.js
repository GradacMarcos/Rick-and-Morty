import { CardActionArea, Grid, Typography } from "@mui/material";
import "./footer.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

export default function Footer(props) {
  const onClick = props;
  return (
    <Grid className="Footer">
      <Grid className="logo" container>
        <Grid item xs={4}>
          <img
            className="logo"
            src="https://images-ext-1.discordapp.net/external/v4DAsbH0L8AVWPvOA9eAZwOgNcDpaDDONOhZIcqGBpI/https/www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-rick-face-kushmastafresh-deviantart-19.png?width=395&height=457"
            alt=""
          ></img>
          <Grid container>
            <Grid item xs={1}>
              <PhoneIcon color="secondary" />
            </Grid>
            <Grid item xs={11}>
              <Typography variant="subtitle1">357164646</Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={1}>
              <EmailIcon color="secondary" />
            </Grid>
            <Grid item xs={11}>
              <Typography variant="subtitle1">
                marcosgradac2022@gmail.com
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid className="enlaces" item xs={3}>
          <Typography variant="h4">ENLACES</Typography>
          <Typography variant="subtitle1">Episodios</Typography>
          <Typography variant="subtitle1">Persobajes</Typography>
        </Grid>
        <Grid className="redes" item xs={5}>
          <Typography variant="h4">REDES SOCIALES</Typography>
          <Grid container>
            <Grid item xs={3}>
              <CardActionArea
                onClick={onClick}
                href="https://www.facebook.com/marcos.gradac.37/"
              >
                <FacebookIcon sx={{ fontSize: 40 }} color="secondary" />
              </CardActionArea>
            </Grid>
            <Grid item xs={3}>
              <CardActionArea
                onClick={onClick}
                href="https://web.whatsapp.com/"
              >
                <WhatsAppIcon sx={{ fontSize: 40 }} color="secondary" />
              </CardActionArea>
            </Grid>
            <Grid item xs={3}>
              <CardActionArea
                onClick={onClick}
                href="https://www.instagram.com/marcosgradac/"
              >
                <InstagramIcon sx={{ fontSize: 40 }} color="secondary" />
              </CardActionArea>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
