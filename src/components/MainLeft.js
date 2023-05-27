import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { Button, Grid } from "@mui/material";
import videoData from "../data/videoData";
import Card from "../components/Card";

export default function MainLeft({ setUrl, setVideoNumber, videoNumber }) {
  React.useEffect(() => {
    if (videoNumber !== -1) {
      console.log(videoNumber);
      setUrl(videoData[videoNumber].url);
    }
    // eslint-disable-next-line
  }, [videoNumber]);
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box
          sx={{
            bgcolor: "#f5f5f5",
            height: "80vh",
            flexGrow: 1,
            overflow: "scroll",
          }}
        >
          <div
            style={{
              margin: 16,
              paddingTop: 8,
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <Button
              variant="contained"
              startIcon={<SkipPreviousIcon />}
              onClick={() =>
                setVideoNumber((prev) => (prev > 0 ? prev - 1 : prev))
              }
            >
              Prev Video
            </Button>
            <Button
              variant="contained"
              endIcon={<SkipNextIcon />}
              onClick={() =>
                setVideoNumber((prev) =>
                  prev < videoData.length ? prev + 1 : prev
                )
              }
            >
              Next Video
            </Button>
          </div>
          <Grid container spacing={2} sx={{ padding: 2 }}>
            {videoData.map((video, i) => {
              return (
                <Grid item xs={6}>
                  <Card
                    video={video}
                    setUrl={setUrl}
                    setVideoNumber={setVideoNumber}
                    index={i}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
}
