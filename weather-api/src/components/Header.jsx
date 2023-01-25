import React from "react";
import { AppBar, Toolbar, Typography, Container } from "@mui/material/";

export default function Header() {
  return (
    <AppBar
      position="static"
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        bgcolor: "#9cb3d6",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar>
          <Typography variant="h5" placement="center" sx={{ color: "#f5f6f7" }}>
            Weather Page!
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
