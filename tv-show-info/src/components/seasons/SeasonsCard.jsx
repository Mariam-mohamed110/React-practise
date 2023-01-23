import React from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const regexExpression = /<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g;

export default function SeasonsCards(props) {
  return (
    <Box sx={{ m: 1 }}>
      <Card sx={{ width: 335, pb: 1 }}>
        <CardActionArea>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              align="center"
              component="div"
            >
              Season {props.season["number"]}
            </Typography>
            <CardMedia
              sx={{
                width: 200,
                height: 285,
                margin: "auto",
              }}
              image={props.season["image"]["medium"]}
              title={props.season["name"]}
            />
            <Typography
              variant="subtitle2"
              color="text.secondary"
              sx={{ pt: 1, pb: 1 }}
            >
              {props.season["summary"].replace(regexExpression, "")}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}
