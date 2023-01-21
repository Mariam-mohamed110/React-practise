import React from "react";
import { Box, AppBar, Toolbar, Typography } from "@mui/material/";

export default function Appbar() {
  return (
    <Box>
      <AppBar
        position="static"
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          bgcolor: "#FFFFFF",
        }}
      >
        <Toolbar>
          <Typography variant="h5" sx={{ color: "black" }}>
            Where in the world?
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
