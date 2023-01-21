import React from "react";
import CountryCard from "./CountryCard";
import { Box } from "@mui/material";

export default function CountryList(props) {
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
      {props.countries.map((country) => {
        // console.log(country);
        return <CountryCard country={country} />;
      })}
    </Box>
  );
}
