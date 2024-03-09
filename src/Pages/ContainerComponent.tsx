import { Alert, Box,  Snackbar } from "@mui/material";
import ModalComponent from "../Components/ModalComponent";
import CardComponents from "../Components/CardComponents";
import { useState } from "react";
import Header from "../Components/Header";

const ContainerComponent = () => {
  const containerStyle = {
    width: "97%",
    margin: "auto",
    minHeight: "88%",
    backgroundColor: "#fff",
    padding: "10px",
    borderRadius: "10px",
  };
  const [snackbarStatus, setSnackbarStatus] = useState(false);

  const handleSnackbar = () => {
    setSnackbarStatus(true);
    setTimeout(() => setSnackbarStatus(false), 5000);
  };

  function handleClose() {
    setSnackbarStatus(false);
  }

  return (
    <> 
    <Header />
    <div style={{ backgroundColor: "rgb(225, 215, 215)" }}>
      <p>Home</p>
   
        <Box sx={containerStyle}>
          {/* Grid Container */}
          <CardComponents />

          {/* Modal Button */}
          <ModalComponent handleSnackbar={handleSnackbar} />

          {/* Snackbar */}
          <Snackbar open={snackbarStatus} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              color="info"
              variant="filled"
              sx={{ width: "100%" }}
            >
              Card Created Successfully
            </Alert>
          </Snackbar>
        </Box>
    </div>
    </>
  );
};
export default ContainerComponent;
