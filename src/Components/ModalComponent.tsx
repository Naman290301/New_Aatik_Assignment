import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useContext } from "react";
import { cardContext } from "./CardContext";
import {
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { ICard } from "./CardContext";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: " translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 10,
  "& > :not(style)": { m: 1 },
};

export default function ModalComponent({
  handleSnackbar,
}: {
  handleSnackbar: () => void;
}) {
  const [open, setOpen] = React.useState(false);
  const titleRef = React.useRef<HTMLInputElement>(null);
  const descriptionRef = React.useRef<HTMLInputElement>(null);
  const statusRef = React.useRef<HTMLInputElement>();
  const cardCtx = useContext(cardContext);
  const [isEmpty, setIsEmpty] = React.useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setIsEmpty(false);
    setOpen(false);
  };

  React.useEffect(() => {
    if (!localStorage.getItem("items") || cardCtx?.cards != null) {
      localStorage.setItem("items", JSON.stringify(cardCtx?.cards));
    }
  }, [cardCtx?.cards]);

  const handleSubmit = () => {
    if (
      titleRef.current!.value.trim().length === 0 ||
      descriptionRef.current!.value.trim().length === 0 ||
      statusRef.current!.value.length === 0
    ) {
      setIsEmpty(true);
      return;
    }
    setIsEmpty(false);

    const newCard: ICard = {
      id: cardCtx?.cards ? cardCtx.cards.length + 1 : 0,
      title: titleRef.current!.value,
      description: descriptionRef.current!.value,
      status: statusRef.current!.value,
    };

    cardCtx!.saveCard(newCard);
    handleClose();
    handleSnackbar();
  };
  console.log(cardCtx);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h4" color="#b1b1ff">
            Add Project Details
          </Typography>
          {isEmpty && (
            <p style={{ color: "red" }}>Please fill all the fields</p>
          )}
          <TextField
            label="Title"
            variant="standard"
            fullWidth
            inputRef={titleRef}
            required
          />
          <TextField
            id="outlined-multiline-static"
            label="Description"
            multiline
            inputRef={descriptionRef}
            fullWidth
            rows={4}
            required
            placeholder="Description"
          />
          <InputLabel id="demo-simple-select-label">Status</InputLabel>
          <Select required fullWidth inputRef={statusRef} defaultValue="">
            <MenuItem value="Successful">Successful</MenuItem>
            <MenuItem value="Work in progress">Work in progress</MenuItem>
            <MenuItem value="Failed">Failed</MenuItem>
          </Select>
          <div style={{ position: "absolute", left: "70%" }}>
            <Button sx={{ m: 1 }} onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="contained" onClick={handleSubmit}>
              Submit
            </Button>
          </div>
        </Box>
      </Modal>

      <Button
        variant="outlined"
        onClick={handleOpen}
        sx={{ position: "fixed", top: "92%", left: "45%" }}
      >
        Create Card
      </Button>
    </div>
  );
}
