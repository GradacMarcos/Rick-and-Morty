import { Drawer, Grid, Typography } from "@mui/material";

export function SideDrawer(props) {
  const { title, children, open, setOpen } = props;

  return (
    <Grid className="Drawer">
      <Drawer
        anchor="right"
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <Typography variant="h4">{title}</Typography>
        {children}
      </Drawer>
    </Grid>
  );
}
