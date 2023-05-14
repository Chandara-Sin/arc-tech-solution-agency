import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import { Divider, Link, TextField, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { isAxiosError } from "axios";
import { decodeJwt } from "jose";
import {
  forwardRef,
  Fragment,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { verifyCode } from "../../api/authentications/Authentication";
import GmailLogo from "../../assets/icon/gmail-logo";
import OutlookLogo from "../../assets/icon/outlook-logo";
import { useAuth } from "../../contexts/Auth";
import "./Authen.css";
import { AuthCodeProps, AuthCodeRef, ISessionToken } from "./AuthenType";

const getTokenFromStorage = () => {
  const session = localStorage.getItem("session");
  const { token } = session ? JSON.parse(session) : { token: "" };
  return token;
};

export const decryptJWT = async <T extends object>(token: string) => {
  try {
    return decodeJwt(token) as T;
  } catch (error) {
    return { user_id: "", role: "guest", email: "" } as T;
  }
};

const AuthCode = forwardRef<AuthCodeRef, AuthCodeProps>(
  ({ onChange, length = 6, autoFocus = false }, ref) => {
    const inputsRef = useRef<Array<HTMLInputElement>>([]);

    const handleOnChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
      index: number
    ) => {
      const { value } = e.target;
      const nextElementSlibing = ++index;
      if (value.match(/\w{1}/)) {
        handleOnFocus(nextElementSlibing);
      } else {
        e.target.value = "";
      }
      handleOnSubmit();
    };

    const handleOnKeyDown = (
      e: React.KeyboardEvent<HTMLDivElement>,
      index: number
    ) => {
      const { key } = e;
      const target = e.target as HTMLInputElement;
      const previousElementSibling = --index;
      if (key === "Backspace") {
        if (!target.value) {
          if (inputsRef.current[previousElementSibling]) {
            const el = inputsRef.current[
              previousElementSibling
            ] as HTMLInputElement;
            el.value = "";
            el.focus();
          }
        } else {
          target.value = "";
        }
        handleOnSubmit();
      }
    };

    const handleOnPaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
      const pastedValue = e.clipboardData.getData("Text");
      let currentInput = 0;
      for (let i = 0; i < pastedValue.length; i++) {
        const pastedCharacter = pastedValue.charAt(i);
        const currentValue = inputsRef.current[currentInput].value;

        if (pastedCharacter.match(/\w{1}/)) {
          if (!currentValue) {
            inputsRef.current[currentInput].value = pastedCharacter;

            const nextElementSlibing = currentInput + 1;
            handleOnFocus(nextElementSlibing);

            currentInput++;
          }
        }
      }
      handleOnSubmit();
    };

    const handleOnFocus = (index: number) => {
      inputsRef.current[index] && inputsRef.current[index].focus();
    };

    const handleOnSubmit = () => {
      const value = inputsRef.current.map(({ value }) => value).join("");
      onChange && onChange(value);
    };

    useImperativeHandle(ref, () => ({
      focus: () => {
        if (inputsRef.current) {
          inputsRef.current[0].focus();
        }
      },
      clear: () => {
        if (inputsRef.current) {
          for (let i = 0; i < inputsRef.current.length; i++) {
            inputsRef.current[i].value = "";
          }
          inputsRef.current[0].focus();
        }
        handleOnSubmit();
      },
    }));

    useEffect(() => {
      autoFocus && inputsRef.current[0].focus();
    }, [autoFocus]);

    return (
      <form autoComplete="off" className="d-flex align-center">
        {[...Array(length)].map((_, i) => (
          <Fragment key={i}>
            <TextField
              type="text"
              variant="outlined"
              size="small"
              inputProps={{ maxLength: "1" }}
              className="verify-input"
              onChange={(e) => handleOnChange(e, i)}
              onKeyDown={(e) => handleOnKeyDown(e, i)}
              onPaste={handleOnPaste}
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
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");
  const token = getTokenFromStorage();

  const handleOnChange = async (authCode: string) => {
    if (authCode.length === 6) {
      try {
        const next = () => {
          localStorage.removeItem("session");
          navigate("/browse-connect", { replace: true });
        };
        const { session_token } = await verifyCode(authCode, token);
        const {
          name: fullName,
          email,
          role,
        } = await decryptJWT<ISessionToken>(session_token);
        signIn(
          {
            fullName,
            email,
            profileImageUrl: "",
            role,
          },
          next
        );
      } catch (error) {
        setErrorMsg(
          isAxiosError(error)
            ? error.response?.data.error
            : "internal server error"
        );
      }
    }
  };

  return (
    <Container className="signin-container d-flex flex-column align-center">
      <Typography className="text-bold mb-2" variant="h3">
        Check your email for a code
      </Typography>
      <Typography className="sub-heading text-center" variant="subtitle1">
        We've send a 6-character code to <strong>{atob(token)}</strong>. The
        code expired shortly, so please enter it soon.
      </Typography>
      <Box className="signin-started align-center text-center justify-center full-width">
        <AuthCode onChange={handleOnChange} />
        {errorMsg && (
          <Box
            className="d-flex align-center justify-center p-2 my-4"
            sx={{
              border: "1px solid #ff4a6d",
              borderRadius: "4px",
              backgroundColor: "#ffecf0",
            }}
          >
            <WarningAmberRoundedIcon color="error" />
            <Typography variant="subtitle2" className="pl-1">
              {errorMsg === "invalid auth code"
                ? "That code wasn't valid! Give it anther go!"
                : errorMsg}
            </Typography>
          </Box>
        )}
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
