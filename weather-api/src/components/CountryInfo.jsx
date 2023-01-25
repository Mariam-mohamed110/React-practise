import { Box, Typography } from "@mui/material";

const tabs = ["name", "country", "lat", "lon", "tz_id"];

export default function CountryInfo({ location }) {
  return (
    <Box bgcolor="#E8E7E5" borderRadius="25px" sx={{ p: 1, m: 2 }}>
      <Box
        sx={{
          m: 2,
          display: "flex",
          flexDirection: "column",
          width: 280,
          borderRadius: "25px",
          backgroundColor: "#FFFFFF",
        }}
      >
        {tabs.map((tab) => {
          return <Typography>{location[tab]}</Typography>;
        })}
      </Box>
    </Box>
  );
}
