import { AlertColor } from "@mui/material";
import { create } from "zustand";

export type SnackBarParams = Parameters<openSnackBarFunction>;

type openSnackBarFunction = (message: string, severity: AlertColor) => void;

interface SnackBarState {
  isOpen: boolean;
  handleClose: () => void;
  message: string;
  severity?: AlertColor;
  openSnackBar: openSnackBarFunction;
}

export const useSnackBarStore = create<SnackBarState>((set) => ({
  isOpen: false,
  severity: undefined,
  message: "",
  handleClose: () => set({ isOpen: false }),
  openSnackBar: (message: string, severity: AlertColor) =>
    set({ isOpen: true, message: message, severity: severity }),
}));
