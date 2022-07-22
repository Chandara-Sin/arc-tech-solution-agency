import React from "react";
import { useAuth } from "../../contexts/Auth";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { signInSchema } from "./AuthenSchema";
import { IFormSignInProps } from "./AuthenType";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, Container, TextField, Typography } from "@mui/material";

function SignInWorkSpace() {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IFormSignInProps>({
    resolver: yupResolver(signInSchema),
  });
  const onSubmit = (data: IFormSignInProps) => {
    const next = () => {
      navigate("/browse-connect", { replace: true });
    };
    signIn("member", next);
  };
  return (
    <Container className="signin-container d-flex flex-column align-center">
      <Typography className="text-bold mb-2" variant="h3">
        Sign in to your workspace
      </Typography>
      <Typography className="sub-heading text-center" variant="subtitle1">
        Enter your workspace’s Slack URL
      </Typography>
      <Box className="signin-started align-center text-center justify-center full-width">
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <TextField
            variant="outlined"
            size="small"
            fullWidth
            placeholder="your-workspace.slack.com"
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
              Continue
            </Typography>
          </Button>
        </form>
        <Typography
          align="left"
          className="signin-workspace-link text-small text-grey-8"
        >
          Don’t know your workspace URL?{" "}
          <Link to="/signin" className="signin-manual-link">
            Find your workspaces
          </Link>
        </Typography>
        <Typography
          align="left"
          className="signin-workspace-link text-small text-grey-8 mt-1"
        >
          Trying to sign in to a{" "}
          <Link to="/workspace-signin" className="signin-manual-link">
            GovSlack Workspace?
          </Link>
        </Typography>
        <Typography
          align="left"
          className="signin-workspace-link text-small text-grey-8 mt-1"
        >
          Looking to create a workspace instead?{" "}
          <Link to="/get-started" className="signin-manual-link">
            Create a new workspace
          </Link>
        </Typography>
      </Box>
    </Container>
  );
}

export default SignInWorkSpace;
