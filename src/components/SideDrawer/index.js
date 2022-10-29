import { Drawer, Grid } from "@mui/material";
import Text from "../Text";
import "./drawer.scss";

export function SideDrawer(props) {
  const { title, children, open, setOpen } = props;

  return (
    <Grid className="Drawer">
      <Drawer
        PaperProps={{
          sx: {
            border: "0px",
            borderLeft: "3px",
            borderStyle:"solid",
            borderColor: "#862e5f",
            backgroundColor: "#292727",
            color: "white",
            width: "25%",
          },
        }}
        anchor="right"
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <Grid className="title">
          <Text className="drawer-title" variant="h4">
            {title}
          </Text>
        </Grid>
        {children}
      </Drawer>
    </Grid>
  );
}
