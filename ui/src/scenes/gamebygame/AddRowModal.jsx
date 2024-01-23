import { Box, Button, Modal, Typography, TextField } from "@mui/material";
import React, { useState } from "react";
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

const AddRowModal = ({ closeModal, setRows }) => {
  const [newRowName, setNewRowName] = useState("");

  return (
    <Modal open={true} onClose={() => closeModal()}>
      <form>
        <Box sx={modalStyles}>
          <Typography variant="h3">Name of new row:</Typography>
          <TextField
            autoFocus
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
                newRowName.toLowerCase().replace(/ /g, "_"),
              ]);

              closeModal();
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
