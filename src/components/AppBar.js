import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function ButtonAppBar() {
  const name = "Yash Raj Goel";
  const date = new Date().toLocaleString();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#ffab40" }}>
        <Toolbar>
          <div
            style={{ flexGrow: 1, display: "flex", justifyContent: "center" }}
          >
            <Typography variant="h6" color="#1565c0">
              Dori UX Interview:&nbsp;
            </Typography>
            <Typography variant="h6">{name}</Typography>
          </div>

          <div
            style={{ flexGrow: 1, display: "flex", justifyContent: "center" }}
          >
            <Typography variant="h6" color="#1565c0">
              Today's Date:&nbsp;
            </Typography>
            <Typography variant="h6">{date}</Typography>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
