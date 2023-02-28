import { Alert, Snackbar as SnackbarMui } from "@mui/material";
import { useSnackBarStore } from "../store/snackbar";

const Snackbar = () => {
  const { isOpen, handleClose, message } = useSnackBarStore();

  const AUTO_HIDE_DURATION = 6000;

  return (
    <SnackbarMui
      open={isOpen}
      autoHideDuration={AUTO_HIDE_DURATION}
      onClose={handleClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    >
      <Alert onClose={handleClose} severity='error' className='w-full'>
        {message}
      </Alert>
    </SnackbarMui>
  );
};

export default Snackbar;
