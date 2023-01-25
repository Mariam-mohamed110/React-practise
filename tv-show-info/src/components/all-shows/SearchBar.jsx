import { React } from "react";
import { TextField, Box } from "@mui/material";

export default function SearchBar({ handleInput }) {
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
          label="Search for a show"
          variant="outlined"
          onChange={(e) => {
            handleInput(e);
          }}
        />
      </Box>
    </Box>
  );
}
