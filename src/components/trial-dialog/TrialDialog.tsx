import React, { FC } from "react";
import "./TrialDialog.css";
import { ITrialDialogProps } from "./TrialDialogType";
import {
  Box,
  Button,
  CardMedia,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Link,
  Typography,
} from "@mui/material";
import { CloseRounded } from "@mui/icons-material";

const TrialDialog: FC<ITrialDialogProps> = (props) => {
  const { onClose, open } = props;
  const handleClose = () => onClose(false);
  return (
    <Dialog
      fullWidth={true}
      maxWidth="sm"
      onClose={handleClose}
      scroll="paper"
      open={open}
      PaperProps={{ style: { borderRadius: "9px" } }}
    >
      <DialogTitle className="dialog-top-section flex-end">
        <IconButton onClick={handleClose} className="dialog-close-button">
          <CloseRounded />
        </IconButton>
      </DialogTitle>
      <DialogContent className="dialog-content">
        <Box className="d-flex flex-column justify-center align-center">
          <Typography variant="h5" textAlign="center" className="text-bold">
            Collaborate with premium features like video and audio clips
          </Typography>
          <Typography variant="body1" textAlign="center" p="15px 20px 0px">
            Record clips right in Slack to share ideas with teammates across
            time zones and locations — minus all the typing. See how clips and
            other premium features improve collaboration, with a free, 30-day
            trial.
          </Typography>
          <CardMedia
            component="video"
            src="/assets/video/trial_video.mov"
            autoPlay
            loop
            className="dialog-video"
          />
          <Button
            variant="contained"
            color="secondary"
            disableElevation
            className="mt-1"
          >
            <Typography
              textTransform="none"
              className="text-bold"
              variant="subtitle1"
            >
              Start Free Trial
            </Typography>
          </Button>
          <Typography
            variant="caption"
            textAlign="center"
            className="text-grey-6"
            pt={1.5}
          >
            Don’t worry — you won’t be charged when your trial ends.{" "}
            <Link href="#" underline="hover">
              Learn more
            </Link>
          </Typography>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default TrialDialog;
