import { Divider, Link, TextField, Typography } from "@mui/material";
import "./Authen.css";
import { Box, Container } from "@mui/system";
import GmailLogo from "../../assets/icon/gmail-logo";
import OutlookLogo from "../../assets/icon/outlook-logo";

const VerifyCode = () => (
  <Container className="signin-container d-flex flex-column align-center">
    <Typography className="text-bold mb-2" variant="h3">
      Check your email for a code
    </Typography>
    <Typography className="sub-heading text-center" variant="subtitle1">
      We've send a 6-character code to <strong>example@gmail.com</strong>. The
      code expired shortly, so please enter it soon.
    </Typography>
    <Box className="signin-started align-center text-center justify-center full-width">
      <form
        autoComplete="off"
        className="d-flex align-center"
        style={{ paddingBottom: "50px" }}
      >
        <TextField
          type="text"
          variant="outlined"
          size="small"
          inputProps={{ maxLength: "1" }}
          className="verify-input"
        />
        <TextField
          type="text"
          variant="outlined"
          size="small"
          inputProps={{ maxLength: "1" }}
          className="verify-input"
        />
        <TextField
          type="text"
          variant="outlined"
          size="small"
          inputProps={{ maxLength: "1" }}
          className="verify-input"
        />
        <Divider
          className="mx-2"
          style={{ width: "10px", borderColor: "black" }}
        />
        <TextField
          type="text"
          variant="outlined"
          size="small"
          inputProps={{ maxLength: "1" }}
          className="verify-input"
        />
        <TextField
          type="text"
          variant="outlined"
          size="small"
          inputProps={{ maxLength: "1" }}
          className="verify-input"
        />
        <TextField
          type="text"
          variant="outlined"
          size="small"
          inputProps={{ maxLength: "1" }}
          className="verify-input"
        />
      </form>
      <Box className="d-flex align-center justify-space-evenly my-4">
        <Link
          className="text-transform-capitalize d-flex align-center pointer"
          underline="hover"
        >
          <GmailLogo
            className="pr-1"
            style={{ width: "1rem", height: "1rem" }}
          />
          Open Gmail
        </Link>
        <Link
          className="text-transform-capitalize d-flex align-center pointer"
          underline="hover"
        >
          <OutlookLogo
            className="pr-1"
            style={{ width: "1.6rem", height: "1.6rem" }}
          />
          Open OutLook
        </Link>
      </Box>
      <Typography className="signin-manual-text">
        Can't find your code? Check your spam folder!
      </Typography>
    </Box>
  </Container>
);

export default VerifyCode;
