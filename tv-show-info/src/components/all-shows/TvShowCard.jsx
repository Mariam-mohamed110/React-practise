import React from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Rating,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const regexExpression = /<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g;

export default function TvShowCard(props) {
  const navigate = useNavigate();
  return (
    <Box sx={{ m: 1 }}>
      <Card sx={{ width: 335, pb: 1 }}>
        <CardActionArea
          key={props.show["id"]}
          onClick={() => {
            props.changeId(props.show["id"]);
            console.log(props.show.id);
            navigate("/shows");
            // <Navigate path="/shows" />;
            // Navigate("/shows");
          }}
          //   element={<TvShowSeasons id={props.show.id} />}
          //   to="/shows"
        >
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              align="center"
              component="div"
            >
              {props.show["name"]}
            </Typography>
            <CardMedia
              sx={{
                width: 200,
                height: 285,
                margin: "auto",
              }}
              image={props.show["image"]["medium"]}
              title={props.show["name"]}
            />
            <Rating
              name="show-rating"
              sx={{ mt: 1 }}
              value={props.show["rating"]["average"]}
              max={10}
              readOnly
            />
            <Typography
              variant="subtitle1"
              color="text.secondary"
              sx={{ pt: 1, pb: 1 }}
            >
              Genres: {props.show["genres"].toString().replace(/,/g, " | ")}
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              {props.show["summary"].replace(regexExpression, "")}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}
