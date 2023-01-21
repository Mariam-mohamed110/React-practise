import React from "react";
import CountryCard from "./CountryCard";
import { Box } from "@mui/material";

export default function CountryList(countries) {
  return (
    <Box>
      {countries.map((country) => {
        console.log(country);
        return <CountryCard country={country} />;
      })}
    </Box>
  );
}
