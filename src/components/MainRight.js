import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ReactPlayer from "react-player/youtube";
import { Link, Typography } from "@mui/material";

export default function MainRight({ url }) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <Box sx={{ bgcolor: "#f5f5f5", height: "80vh" }}>
          <div style={{ padding: 64 }}>
            <Typography variant="h5">Video PlayBack Section</Typography>
            {url && <Link>Video URL: {url} </Link>}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ReactPlayer
              width={720}
              playing={true}
              height={480}
              url={
                url ||
                "https://www.youtube.com/watch?v=IpYJjVw6wjU&ab_channel=fotios"
              }
            />
          </div>
        </Box>
      </Container>
    </React.Fragment>
  );
}
