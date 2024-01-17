import { useTheme } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import { tokens } from "../theme";
import { mockBarData as data } from "../data/mockData";

const BarChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <ResponsiveBar
      data={data}
      theme={{
        axis: {
          domain: {
            line: {
              display: "none",
            },
          },
          ticks: {
            line: {
              display: "none",
            },
            text: {
              fill: colors.grey[100],
            },
          },
        },
        tooltip: {
          container: {
            color: colors.primary[500],
          },
        },
      }}
      keys={["Sold", "Scanned"]}
      indexBy="opponent"
      groupMode="grouped"
      margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
      padding={0.3}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={[colors.grey[100], colors.redAccent[500]]}
      borderColor={{
        from: "color",
        modifiers: [["darker", "1.6"]],
      }}
      axisTop={null}
      axisRight={null}
      enableLabel={false}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
    />
  );
};

export default BarChart;
