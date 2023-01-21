import React from "react";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

export default function CountryCard(props) {
  return (
    <Box sx={{ m: 1 }}>
      <Card sx={{ width: 335, pb: 1 }}>
        <CardMedia
          sx={{ height: 160 }}
          image={props.country.flags.png}
          title={props.country.name.common}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.country.name.common}
          </Typography>
        </CardContent>
        <Typography variant="body2" color="text.secondary">
          Population: {props.country["population"]}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Region: {props.country["region"]}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Capital: {props.country["capital"]}
        </Typography>
      </Card>
    </Box>
  );
}
