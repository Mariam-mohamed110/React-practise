import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Box } from "@mui/material";

export default function lineGraph({ data }) {
  // const data = {
  //   name: country,
  //   hour: hour,
  //   temp: temperature,
  // };

  return (
    <Box alignItems="center" justifyContent="center">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={1000} height={400} data={data}>
          <CartesianGrid stroke="#ccc"></CartesianGrid>
          <XAxis dataKey="hour" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="temp"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
}
