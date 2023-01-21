import React from "react";
import { AppBar, Toolbar, Typography, Container } from "@mui/material/";

export default function Appbar() {
  return (
    <AppBar
      position="static"
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        bgcolor: "#FFFFFF",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar>
          <Typography variant="h5" sx={{ color: "black" }}>
            Where in the world?
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
