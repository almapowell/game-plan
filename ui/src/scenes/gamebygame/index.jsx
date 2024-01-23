import {
  Box,
  Table,
  TableRow,
  TableCell,
  Button,
  TableBody,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import Header from "../../components/Header";
import { generateRandomEvent, mockRows } from "./mockData";
import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { tokens } from "../../theme";
import HeaderActions from "./HeaderActions";
import LoopOverRowValues from "./LoopOverRowValues";
import AddRowModal from "./AddRowModal";
import AddOpponentModal from "./AddOpponentModal";

const btnStyle = {
  width: "100%",
  height: "70px",
  border: "1px dashed grey",
  fontSize: "15px",
  fontWeight: "600",
  textTransform: "none",
  color: "inherit",
};

const GameByGame = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [rows, setRows] = useState(mockRows);
  const [opponents, setOpponents] = useState([
    generateRandomEvent(),
    generateRandomEvent(),
    generateRandomEvent(),
    generateRandomEvent(),
    generateRandomEvent(),
    generateRandomEvent(),
  ]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [newRowModalIsOpen, setNewRowModalIsOpen] = useState(false);
  const [addOpponentModalIsOpen, setAddOpponentModalIsOpen] = useState(false);

  const deleteRow = (row) => {
    const newRows = rows.filter((r) => r.value !== row.value);
    setRows(newRows);
    const newOpponents = [...opponents];
    newOpponents.forEach((o) => {
      delete o[row.value];
    });
    setOpponents(newOpponents);
    setSelectedRow(null);
  };

  const handleAddOpponent = (opponent) => {
    setOpponents([...opponents, opponent.value]);
    setAddOpponentModalIsOpen(false);
  };

  return (
    <Box m="20px">
      <Header title="GAME BY GAME" subtitle="Welcome to your game by game" />
      <Box width="80vw" display="flex" flexDirection="column" gap="30px">
        <HeaderActions setAddOpponentModalIsOpen={setAddOpponentModalIsOpen} />
        <Box
          border="1px solid grey"
          borderRadius="8px 8px 0px 0px"
          overflow={"scroll"}
          style={{
            overflowY: "hidden",
          }}
        >
          <Table>
            <TableBody style={{ overflow: "scroll" }}>
              {rows.map((row, rowIndex) => (
                <TableRow key={rowIndex}>
                  <TableCell
                    onClick={() => {
                      if (row.value === "logo") {
                        return;
                      } else if (selectedRow === row.value) {
                        deleteRow(row);
                        return;
                      } else if (rows.length > 2) setSelectedRow(row.value);
                    }}
                    style={{
                      cursor: "pointer",
                      minWidth: 200,
                      fontSize: "13px",
                      fontWeight: "700",
                      paddingLeft: selectedRow !== row.value && "38px",
                      background: selectedRow === row.value && colors.grey[800],
                    }}
                    variant="head"
                  >
                    <Box display="flex">
                      {selectedRow === row.value && (
                        <DeleteOutlineIcon
                          style={{ position: "relative", right: "5px" }}
                          color="error"
                        />
                      )}
                      {row.label}
                    </Box>
                  </TableCell>
                  <LoopOverRowValues
                    rowValue={rows[rowIndex].value}
                    selectedRow={selectedRow}
                    opponents={opponents}
                    setOpponents={setOpponents}
                  />
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
        <Button
          sx={btnStyle}
          variant="contained"
          onClick={() => setNewRowModalIsOpen(true)}
        >
          <AddIcon /> Add Custom Row
        </Button>

        {newRowModalIsOpen && (
          <AddRowModal
            closeModal={() => setNewRowModalIsOpen(false)}
            setRows={setRows}
          />
        )}

        {addOpponentModalIsOpen && (
          <AddOpponentModal
            setAddOpponentModalIsOpen={setAddOpponentModalIsOpen}
            handleAddOpponent={handleAddOpponent}
          />
        )}
      </Box>
    </Box>
  );
};

export default GameByGame;
