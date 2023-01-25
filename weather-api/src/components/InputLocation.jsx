import { React, useState } from "react";
import {
  Paper,
  IconButton,
  InputBase,
  MenuItem,
  Box,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function InputLocation({ onSubmit, handleDay }) {
  const [searched, setSearched] = useState("");
  const [value, setValue] = useState("");

  const handleInput = (e) => {
    if (e.target.value) {
      setSearched(e.target.value);
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ mt: 2 }}
    >
      <Paper
        component="form"
        sx={{ display: "flex", alignItems: "center", width: 350, mr: 2 }}
      >
        <InputBase
          id="outlined-basic"
          placeholder="Search location"
          sx={{ ml: 1, flex: 1 }}
          onChange={(e) => {
            handleInput(e);
          }}
        />
        <IconButton
          type="button"
          sx={{ p: "10px" }}
          aria-label="search"
          onClick={() => onSubmit(searched)}
        >
          <SearchIcon />
        </IconButton>
      </Paper>
      <Box sx={{ width: 200 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Filter by date</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={value}
            label="Date"
            onChange={(e) => {
              handleDay(e);
              setValue(e.target.value);
            }}
          >
            {Array.from(Array(10), (e, i) => (
              <MenuItem key={i} selected={e === 3} value={i + 1}>
                {i + 1}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
}
