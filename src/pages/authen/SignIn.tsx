import { FC, useState } from "react";
import "./Authen.css";
import { Link, useNavigate } from "react-router-dom";
import { IFormSignIn } from "./AuthenType";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInSchema } from "./AuthenSchema";
import { signUp } from "../../api/authentications/Authentication";
import {
  Box,
  Button,
  Container,
  Divider,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { AutoAwesomeRounded } from "@mui/icons-material";
import GoogleLogo from "../../assets/icon/google-logo";
import GitHubLogo from "../../assets/icon/github-logo";
import Toast from "../../components/toast/Toast";

const SignIn: FC = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IFormSignIn>({
    resolver: yupResolver(signInSchema),
  });
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const onSubmit = async ({ email }: IFormSignIn) => {
    try {
      const { access_token } = await signUp({ email });
      localStorage.setItem("session", JSON.stringify({ token: access_token }));
      navigate("/verify-code", { replace: true });
    } catch (error) {
      console.error(error);
      setOpen(true);
    }
  };
  return (
    <Container className="signin-container d-flex flex-column align-center">
      <Typography className="text-bold mb-2" variant="h3">
        Sign in to Slack
      </Typography>
      <Typography className="sub-heading text-center" variant="subtitle1">
        We suggest using the <strong>email address you use at work.</strong>
      </Typography>
      <Box className="signin-started align-center text-center justify-center full-width">
        <Button
          variant="outlined"
          className="text-transform-none full-width auth-button auth-button-primary"
        >
          <GoogleLogo />
          <Typography variant="body1" className="auth-button-text">
            Sign in with Google
          </Typography>
        </Button>
        <Button
          variant="outlined"
          className="text-transform-none full-width auth-button auth-button-secondary mt-3"
        >
          <GitHubLogo />
          <Typography variant="body1" className="auth-button-text">
            Sign in with Github
          </Typography>
        </Button>
        <Divider className="my-4">
          <Typography variant="subtitle2" className="mx-2">
            OR
          </Typography>
        </Divider>
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <TextField
            variant="outlined"
            size="small"
            fullWidth
            placeholder="name@work-email.com"
            error={!!errors.email}
            helperText={errors?.email?.message}
            {...register("email")}
          />
          <Button
            variant="contained"
            className="signin-button text-transform-none my-4"
            fullWidth
            type="submit"
          >
            <Typography variant="body1" className="auth-button-text">
              Sign in with Email
            </Typography>
          </Button>
        </form>
        <Paper className="signin-manual" elevation={0}>
          <Typography className="signin-manual-text">
            <AutoAwesomeRounded className="signin-manual-icon" />
            We’ll email you a magic code for a password-free sign in. Or you can{" "}
            <Link to="/workspace-signin" className="signin-manual-link">
              sign in manually instead.
            </Link>
          </Typography>
        </Paper>
      </Box>
      <Toast open={open} onClose={handleClose} severity="error" />
    </Container>
  );
};

export default SignIn;
