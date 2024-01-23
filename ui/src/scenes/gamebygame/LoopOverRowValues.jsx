import React from "react";
import { Box, TableCell, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { getPaddingValue } from "../../helpers";
import { DeleteOutline } from "@mui/icons-material";

const LoopOverRowValues = ({
  rowValue,
  selectedRow,
  opponents,
  setOpponents,
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selectedIntersection, setSelectedIntersection] = React.useState(null);
  const [selectedOpponent, setSelectedOpponent] = React.useState(null);

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

  const handleSelectedCell = (rowValue, opponent) => {
    if (rowValue === "logo") return;

    setSelectedIntersection({
      row: rowValue,
      opponent: opponent.id,
    });
  };

  const addBorder = (rowValue, opponent) => {
    if (rowValue === "logo") return;

    return (
      currentCellEqualsSelectedCell(rowValue, opponent) && "2px solid aqua"
    );
  };

  const handleDeleteOpponent = () => {
    const newOpponents = opponents.filter((o) => o.id !== selectedOpponent.id);
    setOpponents(newOpponents);
    setSelectedOpponent(null);
  };

  return (
    <>
      {opponents.map((o, columnIndex) => (
        <TableCell
          align="center"
          onDoubleClick={() => handleSelectedCell(rowValue, o)}
          key={columnIndex}
          style={{
            padding: getPaddingValue(rowValue),
            minWidth: 180,
            background: selectedRow === rowValue && colors.grey[800],
            border: addBorder(rowValue, o),
          }}
        >
          {selectedIntersection?.row === rowValue &&
          selectedIntersection?.opponent === o.id &&
          rowValue !== "logo" ? (
            <input
              autofocus
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
            <Box
              style={{
                cursor: "pointer",
              }}
            >
              {selectedOpponent?.id === o.id ? (
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#F44335",
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                    gap: "5px",
                  }}
                  onClick={handleDeleteOpponent}
                >
                  <DeleteOutline color="error" />
                  Delete
                </span>
              ) : (
                <>
                  {/* {columnIndex % 2 === 0 ? (
                <CheckIcon color="success" />
              ) : (
                <CloseIcon color="error" />
              )} */}
                  <img
                    onClick={() => setSelectedOpponent(o)}
                    height="50"
                    alt="logo"
                    src={o.logo}
                  />
                </>
              )}
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
