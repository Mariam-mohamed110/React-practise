import {
  Box,
  Card,
  Typography,
  CardContent,
  CardMedia,
  CardActionArea,
} from "@mui/material";

export default function DayCard(props) {
  const day = props.day["day"];

  return (
    <Box className="day-card" sx={{ p: 1, m: 2 }}>
      <Card sx={{ display: "flex", width: 300, borderRadius: "25px" }}>
        <CardMedia
          component="img"
          sx={{ width: 150 }}
          image={day["condition"]["icon"]}
          alt={day["condition"]["text"]}
        />
        <CardActionArea onClick={() => props.handleHour(props.day.date)}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h6">
                {props.day["date"]}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                Max: {day["maxtemp_c"]}°C
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                Min: {day["mintemp_c"]}°C
              </Typography>
            </CardContent>
          </Box>
        </CardActionArea>
      </Card>
    </Box>
  );
}
