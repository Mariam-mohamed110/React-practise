import JobCard from "./JobCard";
import { Box } from "@mui/material";

export default function JobList(props) {
  return (
    <Box>
      {props.jobs.map((job, i) => {
        return <JobCard {...job} key={i} />;
      })}
    </Box>
  );
}
