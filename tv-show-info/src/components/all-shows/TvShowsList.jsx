import { React, useEffect, useState } from "react";
import TvShowCard from "./TvShowCard";
import { Box, Container } from "@mui/material";
import SearchBar from "./SearchBar";

export default function TvShowsList(props) {
  const [shows, setShow] = useState([]);
  const [allShows, setAllShows] = useState([]);

  useEffect(() => {
    const getShows = async () => {
      const res = await fetch("https://api.tvmaze.com/shows");
      const json = await res.json();
      setShow(json);
      setAllShows(json);
    };
    getShows();
  }, []);

  const handleInput = (e) => {
    if (e.target.value) {
      const filterShows = allShows.filter((show) =>
        show["name"].toLowerCase().startsWith(e.target.value.toLowerCase())
      );
      setShow(filterShows);
    } else {
      setShow(allShows);
    }
  };
  const keyValue = Object.values(allShows);
  console.log(keyValue);

  return (
    <Container maxWidth={false} disableGutters>
      <SearchBar handleInput={handleInput} />
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
          return (
            <TvShowCard
              show={show}
              key={show["id"]}
              changeId={props.changeId}
            />
          );
        })}
      </Box>
    </Container>
  );
}
