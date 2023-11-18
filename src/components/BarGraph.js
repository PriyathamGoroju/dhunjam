import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const BarGraph = ({ data }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const categories = Object.keys(data);
  const values = categories.map((category) => data[category]);

  const chartData = {
    xAxis:[{
          scaleType: 'band',
          data: categories,
          categoryGapRatio: 0.7,
        }],
    series: [{ data: values}],
    width: isMobile ? 300 : 600,
    height: isMobile ? 200 : 400,
    colors: ["#CBC3E3"],
  };

  return (
    <div>
      <BarChart
        {...chartData}
        xAxisProps={{
          showAxis: true,
          showLabels: true,
          stroke: "#ffffff",
          fill: "#ffffff",
        }}
        yAxisProps={{
          showLabels: false,
        }}
      />
    </div>
  );
};

export default BarGraph;
