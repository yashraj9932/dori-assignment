import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";

import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function MediaCard({ video, setUrl, setVideoNumber, index }) {
  const { title, url, thumbnail } = video;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={thumbnail} title="green iguana" />
      <CardActions sx={{ padding: 2 }}>
        <Typography
          variant="p"
          component="div"
          sx={{
            display: "flex",
            flex: 1,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          Title: {title}
        </Typography>

        <Button
          size="small"
          onClick={() => {
            setUrl(url);
            setVideoNumber(index);
          }}
        >
          Play
        </Button>
      </CardActions>
    </Card>
  );
}
