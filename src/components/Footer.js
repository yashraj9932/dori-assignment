import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Button, TextField } from "@mui/material";

export default function Footer({ setUrl, setVideoNumber }) {
  const placeholder = "Enter URL and click enter on play button";
  const valueRef = React.useRef("");
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="90vw" sx={{ margin: "16px 0" }}>
        <Box
          sx={{
            bgcolor: "#f5f5f5",
            height: "10vh",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <TextField
            style={{ width: "70%" }}
            id="outlined-basic"
            variant="outlined"
            sx={{ backgroundColor: "#f5f5f5" }}
            placeholder={placeholder}
            inputRef={valueRef}
          />
          <Button
            variant="contained"
            onClick={() => {
              setUrl(valueRef.current.value);
              setVideoNumber(-1);
            }}
          >
            Play
          </Button>
        </Box>
      </Container>
    </React.Fragment>
  );
}
