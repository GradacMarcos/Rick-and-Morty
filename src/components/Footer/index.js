import { CardActionArea, Grid, Stack, Typography } from "@mui/material";
import "./footer.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";
import Button from "@mui/material/Button";
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
          <Grid className="email" container>
            <Grid item xs={1}>
              <EmailIcon color="secondary" />
            </Grid>
            <Grid item xs={11}>
              <Button
                onClick={onClick}
                href="https://mail.google.com/mail/u/0/#sent?compose=new"
                variant="text"
              >
                Gmail
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid className="enlaces" item xs={3}>
          <Typography variant="h4">ENLACES</Typography>
          <Stack spacing={2} direction="row">
            <Button
              onClick={onClick}
              href="http://localhost:3000/Episodios/"
              variant="outlined"
            >
              Episodios
            </Button>
            <Button
              onClick={onClick}
              href="http://localhost:3000/Personajes"
              variant="outlined"
            >
              Personajes
            </Button>
          </Stack>
        </Grid>
        <Grid className="redes" item xs={5}>
          <Typography variant="h4">REDES SOCIALES</Typography>
          <Grid className="icons" container>
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
