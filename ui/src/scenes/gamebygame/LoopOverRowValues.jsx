import React from "react";
import { Box, TableCell, useTheme } from "@mui/material";
import { tokens } from "../../theme";

const LoopOverRowValues = ({
  rowValue,
  selectedRow,
  opponents,
  setOpponents,
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selectedIntersection, setSelectedIntersection] = React.useState(null);

  const currentCellEqualsSelectedCell = (rowValue, opponent) => {
    return (
      selectedIntersection?.row === rowValue &&
      selectedIntersection?.opponent === opponent.id
    );
  };

  const handleInputOnChange = (e, columnIndex) => {
    const newOpponents = [...opponents];
    newOpponents[columnIndex][rowValue] = e.target.value;
    setOpponents(newOpponents);
  };

  return (
    <>
      {opponents.map((o, columnIndex) => (
        <TableCell
          onClick={() => {
            if (rowValue === "logo") return;
            setSelectedIntersection({
              row: rowValue,
              opponent: o.id,
            });
          }}
          key={columnIndex}
          style={{
            minWidth: 180,
            background: selectedRow === rowValue && colors.grey[800],

            border:
              currentCellEqualsSelectedCell(rowValue, o) && "2px solid aqua",
          }}
        >
          {currentCellEqualsSelectedCell(rowValue, o) && rowValue !== "logo" ? (
            <input
              style={{
                backgroundColor: "transparent",
                border: "none",
                outline: "none",
                color: "inherit",
              }}
              onChange={(e) => handleInputOnChange(e, columnIndex)}
              onBlur={() => setSelectedIntersection(null)}
              type="text"
              value={o[rowValue] || ""}
            />
          ) : rowValue === "logo" ? (
            <Box style={{ cursor: "pointer" }}>
              <img height="50" alt="logo" src={o.logo} />
            </Box>
          ) : (
            o[rowValue]
          )}
        </TableCell>
      ))}
    </>
  );
};

export default LoopOverRowValues;
