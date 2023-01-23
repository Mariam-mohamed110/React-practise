import { React, useState } from "react";
import {
  TextField,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

export default function SearchBar({ handleInput, handleRegion, region }) {
  const [value, setValue] = useState("");

  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { ml: 3, mt: 2, width: "25ch", mr: 2 },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Search for a country"
          variant="outlined"
          onChange={handleInput}
        />
      </Box>
      <Box sx={{ width: 200, mt: 2, ml: 115 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            Filter by region
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={value}
            label="Region"
            onChange={(e) => {
              handleRegion(e);
              setValue(e.target.value);
            }}
          >
            {regions.map((region) => (
              <MenuItem value={region}>{region}</MenuItem>
            ))}

            {/* <MenuItem value="Africa">Africa</MenuItem>
            <MenuItem value="Americas">Americas</MenuItem>
            <MenuItem value="Asia">Asia</MenuItem>
            <MenuItem value="Europe">Europe</MenuItem>
            <MenuItem value="Oceania">Oceania</MenuItem> */}
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
}
