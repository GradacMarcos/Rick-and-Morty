import { Typography } from "@mui/material";

export default function Text(props) {
  const { children, color = "white", variant } = props;

  return (
    <Typography variant={variant} color={color} className="Text">
      {children}
    </Typography>
  );
}
