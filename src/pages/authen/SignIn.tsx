import { FC, useEffect, useState } from "react";
import "./Authen.css";
import { Link, useNavigate } from "react-router-dom";
import { IAuthen, IFormSignIn } from "./AuthenType";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInSchema } from "./AuthenSchema";
import { signUp } from "../../services/authentications/Authentication";
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
import Toast, {
  IToastProps,
  initToastProps,
} from "../../components/toast/Toast";
import { supabase } from "../../config/supabase";
import { useAuth } from "../../contexts/Auth";

const SignIn: FC = () => {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IFormSignIn>({
    resolver: yupResolver(signInSchema),
  });
  const [toast, setToast] =
    useState<Omit<IToastProps, "onClose">>(initToastProps);
  const handleClose = () => setToast(initToastProps);
  const onLoading = toast.open && toast.severity === "info";

  const onSubmit = async ({ email }: IFormSignIn) => {
    try {
      const { access_token } = await signUp({ email });
      localStorage.setItem("session", JSON.stringify({ token: access_token }));
      navigate("/verify-code", { replace: true });
    } catch (error) {
      console.error(error);
      setToast({ ...initToastProps, open: true });
    }
  };

  const onGoogleLogin = async () => {
    localStorage.setItem("auth", JSON.stringify({ provider: "google" }));
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        queryParams: {
          access_type: "offline",
          prompt: "consent",
        },
        redirectTo: "/signin",
      },
    });
    if (error) {
      localStorage.clear();
      console.error(error);
      setToast({ ...initToastProps, open: true });
    }
  };

  const getSession = async () => {
    const next = () => {
      setToast(initToastProps);
      navigate("/browse-connect", { replace: true });
    };
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();
    const userMetadata = user?.user_metadata;
    if (userMetadata)
      signIn(
        {
          fullName: userMetadata["full_name"],
          email: userMetadata["email"],
          role: "member",
          profileImageUrl: userMetadata["avatar_url"],
          provider: user.app_metadata.provider ?? "",
        },
        next
      );

    if (error?.message !== "invalid claim: missing sub claim") {
      localStorage.clear();
      console.error(error);
      setToast({ ...initToastProps, open: true });
    }
  };

  useEffect(() => {
    const authStorage = localStorage.getItem("auth");
    const { provider }: IAuthen = authStorage
      ? JSON.parse(authStorage)
      : { provider: "" };
    if (provider) {
      setToast({
        open: true,
        severity: "info",
        title: `Signing in ${provider}...`,
        anchorOrigin: { vertical: "top", horizontal: "right" },
      });
      getSession();
    }
  }, []);

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
          onClick={() => onGoogleLogin()}
          disabled={onLoading}
        >
          <GoogleLogo />
          <Typography variant="body1" className="auth-button-text">
            Sign in with Google
          </Typography>
        </Button>
        <Button
          variant="outlined"
          className="text-transform-none full-width auth-button auth-button-secondary mt-3"
          onClick={async () => await supabase.auth.signOut()}
          disabled={onLoading}
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
            disabled={onLoading}
          />
          <Button
            variant="contained"
            className="signin-button text-transform-none my-4"
            fullWidth
            type="submit"
            disabled={onLoading}
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
      <Toast
        open={toast.open}
        onClose={handleClose}
        severity={toast.severity}
        title={toast.title}
        anchorOrigin={toast.anchorOrigin}
      />
    </Container>
  );
};

export default SignIn;
