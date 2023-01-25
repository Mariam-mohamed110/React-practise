import { React, useEffect, useState } from "react";
import { Box } from "@mui/material";
import SeasonsCards from "./SeasonsCard";

export default function TvShowSeasons(props) {
  const [show, setShow] = useState([]);

  useEffect(() => {
    const getShow = async () => {
      const res = await fetch(
        `https://api.tvmaze.com/shows/${props.id}/seasons`
      );
      const json = await res.json();
      setShow(json);
    };
    getShow();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        p: 1,
        m: 1,
        bgcolor: "background.paper",
        borderRadius: 1,
      }}
    >
      {show.map((season) => (
        <SeasonsCards season={season} key={season["id"]} />
      ))}
    </Box>
  );
}
