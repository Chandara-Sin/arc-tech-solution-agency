import { FC, forwardRef } from "react";
import { AlertProps, Snackbar, SnackbarOrigin } from "@mui/material";
import MuiAlert, { AlertColor } from "@mui/material/Alert";

export interface IToastProps {
  open: boolean;
  anchorOrigin?: SnackbarOrigin;
  onClose: VoidFunction;
  severity: AlertColor;
  title?: string;
}

export const initToastProps: IToastProps = {
  open: false,
  onClose: () => {},
  severity: "info",
};

const Alert = forwardRef<HTMLDivElement, AlertProps>((props, ref) => (
  <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
));

const Toast: FC<IToastProps> = (props) => {
  const { open, onClose, anchorOrigin, severity, title } = props;
  return (
    <Snackbar
      anchorOrigin={anchorOrigin ?? { vertical: "top", horizontal: "center" }}
      open={open}
      autoHideDuration={5000}
      onClose={onClose}
    >
      <Alert onClose={onClose} severity={severity} sx={{ width: "100%" }}>
        {title || "Something went wrong!"}
      </Alert>
    </Snackbar>
  );
};

export default Toast;
