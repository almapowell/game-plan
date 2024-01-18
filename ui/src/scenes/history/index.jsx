import React, { useState } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  useTheme,
} from "@mui/material";
import Header from "../../components/Header";
import { historyTableData } from "../../data/mockData";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import GridContainer from "../../components/GridContainer";
import StatBox from "../../components/StatBox";
import { AutoModeOutlined } from "@mui/icons-material";
import ProgressCircle from "../../components/ProgressCircle";

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const dateFormatter = (date) =>
  new Date(date).toLocaleDateString("en-us", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

const columns = [
  {
    field: "opponent",
    headerName: "Opponent",
    flex: 1,
    editable: true,
    sortable: false,
  },
  {
    field: "date",
    headerName: "Date",
    flex: 1,
    editable: true,
    // valueGetter: (params) => dateFormatter(params.row.date),
    renderCell: (params) => {
      return dateFormatter(params.row.date);
    },
  },
  {
    field: "gameAttendance",
    headerName: "Game Attendance",
    type: "number",
    flex: 1,
    editable: true,
  },

  {
    field: "studentAttendance",
    headerName: "Student Attendance",
    type: "number",
    flex: 1,
    editable: true,
  },
  {
    field: "revenueGenerated",
    headerName: "Revenue Generated",
    type: "number",
    flex: 1,
    editable: true,
    renderCell: (params) => {
      return currencyFormatter.format(params.row.revenueGenerated);
    },
    //     valueGetter: (params) =>
    //       currencyFormatter.format(params.row.revenueGenerated),
  },
];

const History = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [selectedYear, setSelectedYear] = useState(false);

  const handleChange = (event) => {
    setSelectedYear(event.target.value);
  };

  return (
    <Box m="20px">
      <Header
        title="HISTORY"
        subtitle="View the history of the sport at Oklahoma"
      />
      {/* SELECT DROPDOWN */}
      <FormControl variant="filled" fullWidth>
        <InputLabel>Select Year</InputLabel>
        <Select value={selectedYear} label="Age" onChange={handleChange}>
          {historyTableData.map((yearlyData, index) => (
            <MenuItem key={index} value={yearlyData}>
              {yearlyData.year}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {/* GRID TABLE */}
      {selectedYear && (
        <Box mt={3}>
          <GridContainer>
            <DataGrid
              rows={selectedYear.games}
              columns={columns}
              disableRowSelectionOnClick
            />
          </GridContainer>
        </Box>
      )}
      {/* Totals */}
      {selectedYear && (
        <Box>
          <Typography variant="h3" marginTop="30px">
            Totals
          </Typography>

          <Box
            display="grid"
            gridTemplateColumns="repeat(12, 1fr)"
            gridAutoRows="140px"
            gap="20px"
            mt="20px"
          >
            <Box
              gridColumn="span 4"
              gridRow="span 2"
              backgroundColor={colors.primary[400]}
              p="30px"
            >
              <Typography variant="h5" fontWeight="600">
                Campaign
              </Typography>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                mt="25px"
              >
                <ProgressCircle size="125" />
                <Typography
                  variant="h5"
                  color={colors.redAccent[500]}
                  sx={{ mt: "15px" }}
                >
                  $48,352 revenue generated
                </Typography>
                <Typography>
                  Includes extra misc expenditures and costs
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default History;
