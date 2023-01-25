import DayCard from "./DayCard";
import { Box } from "@mui/material";

export default function DaysList(props) {
  return (
    <Box
      display="flex"
      flexDirection="row"
      bgcolor="#E8E7E5"
      borderRadius="25px"
      style={{ maxWidth: 1010, overflow: "auto" }}
    >
      {props.weather["forecast"]["forecastday"].map((day, i) => (
        <DayCard day={day} handleHour={props.handleHour} />
      ))}
    </Box>
  );
}
