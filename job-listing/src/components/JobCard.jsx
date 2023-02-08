import { Avatar, Box, Grid, Typography } from "@mui/material";

export default function JobCard(props) {
  return (
    <Box sx={{ m: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={4} justifyContent="center" alignItems="center">
          <Avatar
            src={props.logo}
            alt={props.company}
            sx={{ width: 64, height: 64 }}
          />
        </Grid>
        <Grid item xs={4}>
          <Box display="flex" flexDirection="row">
            <Typography sx={{ color: "#7AB0B3", fontWeight: "bold" }}>
              {props.company}
            </Typography>
            {props.new ? (
              <Typography
                sx={{
                  backgroundColor: "#7AB0B3",
                  borderRadius: "25px",
                  color: "white",
                  fontWeight: "bold",
                  pr: 1,
                  pl: 1,
                  ml: 1,
                }}
              >
                NEW!
              </Typography>
            ) : null}
            {props.featured ? (
              <Typography
                sx={{
                  backgroundColor: "black",
                  borderRadius: "25px",
                  color: "white",
                  fontWeight: "bold",
                  pr: 1,
                  pl: 1,
                  ml: 1,
                }}
              >
                FEATURED
              </Typography>
            ) : null}
          </Box>
          <Box>
            <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
              {props.position}
            </Typography>
          </Box>
          <Box display="flex" flexDirection="row">
            <Typography sx={{ color: "#7B8E8E", mr: 1 }}>
              {props.postedAt}
            </Typography>
            <Typography sx={{ color: "#7B8E8E", mr: 1 }}>·</Typography>
            <Typography sx={{ color: "#7B8E8E", mr: 1 }}>
              {props.contract}
            </Typography>
            <Typography sx={{ color: "#7B8E8E", mr: 1 }}>·</Typography>
            <Typography sx={{ color: "#7B8E8E", mr: 1 }}>
              {props.location}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
