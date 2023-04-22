import { Divider, Link, TextField, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { forwardRef, Fragment, useImperativeHandle, useRef } from "react";
import GmailLogo from "../../assets/icon/gmail-logo";
import OutlookLogo from "../../assets/icon/outlook-logo";
import "./Authen.css";
import { AuthCodeProps, AuthCodeRef } from "./AuthenType";

const AuthCode = forwardRef<AuthCodeRef, AuthCodeProps>(
  ({ onChange, length = 6 }) => {
    const inputsRef = useRef<Array<HTMLInputElement>>([]);

    const handleOnChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
      index: number
    ) => {
      const { value } = e.target;
      const nextElementSlibing = ++index;
      if (value.match(/\w{1}/)) {
        inputsRef.current[nextElementSlibing] &&
          inputsRef.current[nextElementSlibing].focus();
      } else {
        e.target.value = "";
      }
      handleOnSubmit();
    };

    const handleOnSubmit = () => {
      const value = inputsRef.current.map(({ value }) => value).join("");
      onChange && onChange(value);
    };

    const handleOnFocus = (e: React.FocusEvent<HTMLInputElement>) =>
      e.target.select();

    return (
      <form
        autoComplete="off"
        className="d-flex align-center"
        style={{ paddingBottom: "50px" }}
      >
        {[...Array(length)].map((_, i) => (
          <Fragment key={i}>
            <TextField
              type="text"
              variant="outlined"
              size="small"
              inputProps={{ maxLength: "1" }}
              className="verify-input"
              onChange={(e) => handleOnChange(e, i)}
              onFocus={handleOnFocus}
              inputRef={(el: HTMLInputElement) => {
                inputsRef.current[i] = el;
              }}
            />
            {i === 2 && (
              <Divider
                className="mx-2"
                style={{ width: "10px", borderColor: "black" }}
              />
            )}
          </Fragment>
        ))}
      </form>
    );
  }
);

const VerifyCode = () => {
  return (
    <Container className="signin-container d-flex flex-column align-center">
      <Typography className="text-bold mb-2" variant="h3">
        Check your email for a code
      </Typography>
      <Typography className="sub-heading text-center" variant="subtitle1">
        We've send a 6-character code to <strong>example@gmail.com</strong>. The
        code expired shortly, so please enter it soon.
      </Typography>
      <Box className="signin-started align-center text-center justify-center full-width">
        <AuthCode />
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
};

export default VerifyCode;
