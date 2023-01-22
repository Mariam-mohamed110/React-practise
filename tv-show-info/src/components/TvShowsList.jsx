import { React, useEffect, useState } from "react";
import TvShowCard from "./TvShowCard";
import { Box } from "@mui/material";

export default function TvShowsList() {
  const [shows, setShow] = useState([]);

  useEffect(() => {
    const getShows = async () => {
      const res = await fetch("https://api.tvmaze.com/shows");
      const json = await res.json();
      setShow(json);
      console.log(json);
      console.log(json[0]["genres"]);
    };
    getShows();
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
      {shows.map((show) => {
        return <TvShowCard show={show} key={show["id"]} />;
      })}
    </Box>
  );
}
