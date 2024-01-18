import { Box, Button, useTheme } from "@mui/material";
import React from "react";
import { tokens } from "../../theme";
import AddIcon from "@mui/icons-material/Add";

const HeaderActions = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box display="flex" justifyContent="space-between">
      <Button
        style={{
          width: "200px",
          height: "50px",
          fontSize: "15px",
          fontWeight: "600",
          textTransform: "none",
          border: `1px solid ${colors.primary[100]}`,
        }}
        variant="contained"
        color="primary"
      >
        <AddIcon /> Add New Game
      </Button>
      <Button
        style={{
          width: "200px",
          height: "50px",
          fontSize: "15px",
          fontWeight: "600",
          textTransform: "none",
        }}
        variant="contained"
        color="secondary"
      >
        Save
      </Button>
    </Box>
  );
};

export default HeaderActions;
