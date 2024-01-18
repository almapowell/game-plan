import {
  Box,
  Table,
  TableRow,
  TableCell,
  Button,
  Modal,
  Typography,
  TextField,
  TableBody,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import Header from "../../components/Header";
import { mockOpponents, mockRows } from "./mockData";
import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { tokens } from "../../theme";
import HeaderActions from "./HeaderActions";
import LoopOverRowValues from "./LoopOverRowValues";
import { modalStyles } from "../../helpers";

const btnStyle = {
  width: "100%",
  height: "70px",
  border: "1px dashed grey",
  fontSize: "15px",
  fontWeight: "600",
  textTransform: "none",
  color: "inherit",
};

const AddRowModal = ({ setOpenModal, setRows }) => {
  const [newRowName, setNewRowName] = useState("");

  return (
    <Modal open={true} onClose={() => setOpenModal(false)}>
      <form>
        <Box sx={modalStyles}>
          <Typography variant="h3">Name of new row:</Typography>
          <TextField
            value={newRowName}
            onChange={(e) => setNewRowName(e.target.value)}
            sx={{ border: "1px solid grey", borderRadius: "5px" }}
            fullWidth
          />
          <Button
            sx={{
              ...btnStyle,
              height: "50px",
              border: "2px solid white",
              width: "50%",
            }}
            onClick={() => {
              setRows((prevRows) => [
                ...prevRows,
                {
                  label: newRowName,
                  value: newRowName.toLowerCase().replace(" ", "_"),
                },
              ]);
              setOpenModal(false);
              setNewRowName("");
            }}
            type="submit"
          >
            Save
          </Button>
        </Box>
      </form>
    </Modal>
  );
};

export default AddRowModal;
