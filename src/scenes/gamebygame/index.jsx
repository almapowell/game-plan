import { Box, Table, TableRow, TableCell, Button } from "@mui/material";
import React, { useState } from "react";
import Header from "../../components/Header";
import { mockOpponents, mockRows } from "./mockData";
import AddIcon from "@mui/icons-material/Add";

const GameByGame = () => {
  const [rows, setRows] = useState(mockRows);
  const [opponents, setOpponents] = useState(mockOpponents);
  const [disabled, setDisabled] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleAddRow = () => {
    setDisabled(true);
    setRows((prevRows) => [
      ...prevRows,
      {
        label: "Add Row Name",
        value: "",
      },
    ]);
  };

  return (
    <Box m="20px">
      <Header title="GAME BY GAME" subtitle="Welcome to your game by game" />
      <Box width="80vw" display="flex" justifyContent="flex-end">
        <Button variant="contained" color="secondary">
          Save
        </Button>
      </Box>
      <Box
        border="1px solid grey"
        borderRadius="8px 8px 0px 0px"
        width="80vw"
        overflow={"scroll"}
        style={{
          overflowY: "hidden",
        }}
      >
        <Table>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell
                style={{
                  minWidth: 180,
                  fontWeight: "700",
                  border: row.label === "Add Row Name" && "2px dashed white",
                }}
                variant="head"
              >
                {row.label}
              </TableCell>
              {opponents.map((o, i) => (
                <TableCell
                  //   onClick={() => (
                  //     setDisabled(true),
                  //     setSelectedRow({ row: row.value, opponent: o.id })
                  //   )}
                  key={i}
                  style={{
                    minWidth: 180,
                  }}
                >
                  {selectedRow?.row === row.value &&
                  selectedRow?.opponent === o.id &&
                  row.value !== "logo" ? (
                    <input
                      style={{
                        backgroundColor: "transparent",
                        border: "none",
                        borderBottom: "1px solid grey",
                        outline: "none",
                        color: "inherit",
                      }}
                      type="text"
                      value={o[row.value]}
                    />
                  ) : row.value === "logo" ? (
                    <img height="50" src={o.logo} />
                  ) : (
                    o[row.value]
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </Table>
      </Box>
      <Button
        sx={{
          width: "80vw",
          border: "1px solid grey",
          marginTop: "20px",
          padding: "10px",
          fontSize: "15px",
          fontWeight: "600",
          textTransform: "none",
        }}
        variant="contained"
        onClick={handleAddRow}
        disabled={disabled}
      >
        <AddIcon /> Add Custom Row
      </Button>
    </Box>
  );
};

export default GameByGame;
