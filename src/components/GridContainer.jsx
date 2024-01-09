import React from "react";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

const GridContainer = ({ children }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      m="auto"
      height="auto"
      borderRadius={"2px"}
      width="90%"
      sx={{
        "& .MuiDataGrid-root": {
          // border: "none",
        },
        "& .MuiDataGrid-cell": {
          // borderBottom: "none",
        },
        "& .name-column--cell": {
          // color: colors.redAccent[400],
        },
        "& .MuiDataGrid-columnHeaders": {
          backgroundColor: colors.redAccent[700],
          // borderBottom: "none",
        },
        "& .MuiDataGrid-virtualScroller": {
          backgroundColor: colors.primary[400],
        },
        "& .MuiDataGrid-footerContainer": {
          display: "none",
          // borderTop: "none",
          // backgroundColor: colors.blueAccent[700],
        },
        "& .MuiCheckbox-root": {
          color: `${colors.redAccent[200]} !important`,
        },
      }}
    >
      {children}
    </Box>
  );
};

export default GridContainer;
