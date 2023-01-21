import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export default function CountryCard(country) {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        sx={{ height: 160 }}
        image={country["flags"]["png"]}
        title={country["name"]["common"]}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {country["name"]["common"]}
        </Typography>
      </CardContent>
      <Typography variant="body2" color="text.secondary">
        Population: {country["population"]}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Region: {country["region"]}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Capital: {country["capital"][0]}
      </Typography>
    </Card>
  );
}
