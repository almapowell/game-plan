import React from "react";
import {
  Box,
  Modal,
  Typography,
  Autocomplete,
  TextField,
  Button,
} from "@mui/material";
import { modalStyles } from "../../helpers";
import { generateRandomEvent } from "./mockData";

const btnStyle = {
  width: "100%",
  height: "70px",
  border: "1px dashed grey",
  fontSize: "15px",
  fontWeight: "600",
  textTransform: "none",
  color: "inherit",
};

const AddOpponentModal = ({ setAddOpponentModalIsOpen, handleAddOpponent }) => {
  const [selectedTeam, setSelectedTeam] = React.useState(null);

  return (
    <Modal
      sx={{
        "& > .MuiBackdrop-root": {
          backdropFilter: "blur(1px)",
          backgroundColor: "rgba(50,50,50,0.4)",
        },
      }}
      open={true}
      onClose={() => setAddOpponentModalIsOpen(false)}
    >
      <Box sx={modalStyles}>
        <Typography variant="h3">Who is your opponent:</Typography>
        <Autocomplete
          fullWidth
          disablePortal
          options={teams}
          onChange={(_, newTeam) => setSelectedTeam(newTeam)}
          renderInput={(params) => (
            <TextField autoFocus fullWidth {...params} label="Teams" />
          )}
        />
        <Button
          sx={{
            ...btnStyle,
            height: "50px",
            border: !selectedTeam ? "2px solid grey" : "2px solid white",
            width: "50%",
          }}
          onClick={() => handleAddOpponent(selectedTeam)}
          type="submit"
          disabled={!selectedTeam}
        >
          Save
        </Button>
      </Box>
    </Modal>
  );
};

export default AddOpponentModal;

const teams = [
  {
    label: "Kansas",
    value: generateRandomEvent("Kansas"),
  },
  {
    label: "Texas",
    value: generateRandomEvent("Texas"),
  },
  {
    label: "Alabama",
    value: generateRandomEvent("Alabama"),
  },
  {
    label: "Oregon",
    value: generateRandomEvent("Oregon"),
  },
  {
    label: "Washington",
    value: generateRandomEvent("Washington"),
  },
  {
    label: "Florida State",
    value: generateRandomEvent("Florida State"),
  },
  {
    label: "Michigan",
    value: generateRandomEvent("Michigan"),
  },
  {
    label: "Texas A&M",
    value: generateRandomEvent("Texas A&M"),
  },
];
