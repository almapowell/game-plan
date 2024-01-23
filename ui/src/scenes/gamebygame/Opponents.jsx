import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Box,
  useTheme,
  Button,
} from "@mui/material";
import { generateRandomEvent } from "./mockData";
import Header from "../../components/Header";
import LoopOverRowValues from "./LoopOverRowValues";
import { tokens } from "../../theme";
import AddOpponentModal from "./AddOpponentModal";
import HeaderActions from "./HeaderActions";
import AddIcon from "@mui/icons-material/Add";
import { getPaddingValue } from "../../helpers";
import AddRowModal from "./AddRowModal";
import DeleteOutline from "@mui/icons-material/DeleteOutline";

const btnStyle = {
  width: "100%",
  height: "60px",
  border: "1px dashed grey",
  fontSize: "15px",
  fontWeight: "600",
  textTransform: "none",
  color: "inherit",
};

const formatHeader = (header) => {
  // Convert camelCase to normal English text with spaces and capital letters
  const formattedString = header
    .replace(/_/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  // return formattedString;
  return header === "logo" ? "" : formattedString;
};

const OpponentsTable = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [selectedRow, setSelectedRow] = useState(null);
  const [opponents, setOpponents] = useState([
    generateRandomEvent("Kansas"),
    generateRandomEvent("Texas"),
    generateRandomEvent("Alabama"),
    generateRandomEvent("Michigan"),
    generateRandomEvent("Oregon"),
    generateRandomEvent("Washington"),
  ]);
  const [headers, setHeaders] = useState(Object.keys(opponents[0]));
  const [newRowModalIsOpen, setNewRowModalIsOpen] = useState(false);
  const [addOpponentModalIsOpen, setAddOpponentModalIsOpen] = useState(false);

  const handleAddOpponent = (opponent) => {
    setOpponents([...opponents, opponent.value]);
    setAddOpponentModalIsOpen(false);
  };

  const deleteRow = (row) => {
    const newRows = headers.filter((h) => h !== row);
    setHeaders(newRows);
    const newOpponents = [...opponents];
    newOpponents.forEach((o) => {
      delete o[row];
    });
    setOpponents(newOpponents);
    setSelectedRow(null);
  };

  return (
    <Box m="20px">
      <Header title="GAME BY GAME" subtitle="Welcome to your game by game" />

      <Box width="80vw" margin="auto">
        <Box mb="40px">
          <HeaderActions
            setAddOpponentModalIsOpen={setAddOpponentModalIsOpen}
          />
        </Box>

        <TableContainer
          sx={{
            border: "1px solid grey",
            borderRadius: "8px 8px 0px 0px",
          }}
          component={Paper}
        >
          <Table>
            <TableBody>
              {headers.map(
                (header) =>
                  header !== "id" && (
                    <TableRow key={header}>
                      <TableCell
                        style={{
                          padding: getPaddingValue(header),
                          paddingLeft: selectedRow !== header ? "38px" : "14px",
                          cursor: "pointer",
                          minWidth: 200,
                          fontSize: "13px",
                          fontWeight: "700",
                          background:
                            selectedRow === header && colors.grey[800],
                        }}
                        component="th"
                        scope="row"
                        onClick={() => {
                          if (header === "logo") {
                            return;
                          } else if (selectedRow === header) {
                            deleteRow(header);
                            return;
                          } else if (headers.length > 2) setSelectedRow(header);
                        }}
                      >
                        <Box display="flex">
                          {selectedRow === header && (
                            <DeleteOutline
                              style={{ position: "relative", right: "5px" }}
                              color="error"
                            />
                          )}
                          {formatHeader(header)}
                        </Box>
                      </TableCell>

                      <LoopOverRowValues
                        rowValue={header}
                        selectedRow={selectedRow}
                        opponents={opponents}
                        setOpponents={setOpponents}
                      />
                    </TableRow>
                  )
              )}
            </TableBody>
          </Table>
        </TableContainer>

        <Button
          sx={{ ...btnStyle, marginTop: "20px" }}
          variant="contained"
          onClick={() => setNewRowModalIsOpen(true)}
        >
          <AddIcon /> Add Custom Row
        </Button>

        {newRowModalIsOpen && (
          <AddRowModal
            closeModal={() => setNewRowModalIsOpen(false)}
            setRows={setHeaders}
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

export default OpponentsTable;

// {
//   opponents.map((opponent, index) => (
//     <TableCell key={index} align="center">
//       {header === "logo" ? (
//         <img src={opponent[header]} alt="logo" width="50px" height="50px" />
//       ) : (
//         opponent[header]
//       )}
//     </TableCell>
//   ));
// }
