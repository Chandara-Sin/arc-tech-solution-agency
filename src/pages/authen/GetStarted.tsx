import { FC, useState } from "react";
import "./Authen.css";
import { useNavigate } from "react-router-dom";
import { IFormSignIn } from "./AuthenType";
import { signInSchema } from "./AuthenSchema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUp } from "../../services/authentications/Authentication";
import Toast from "../../components/toast/Toast";
import {
  Box,
  Button,
  Container,
  Link,
  TextField,
  Typography,
} from "@mui/material";

const GetStarted: FC = () => {
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
        First, enter your email
      </Typography>
      <Typography className="sub-heading text-center" variant="subtitle1">
        We suggest using the <strong>email address you use at work.</strong>
      </Typography>
      <Box className="signin-started align-center text-center justify-center full-width">
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
              Continue
            </Typography>
          </Button>
        </form>
        <Typography align="left" className="signin-manual-text text-grey-8">
          By continuing, you’re agreeing to our{" "}
          <Link href="#" className="text-grey-8" underline="hover">
            Customer Terms of Service
          </Link>
          ,{" "}
          <Link href="#" className="text-grey-8" underline="hover">
            User Terms of Service
          </Link>
          ,{" "}
          <Link href="#" className="text-grey-8" underline="hover">
            Privacy Policy
          </Link>
          , and{" "}
          <Link href="#" className="text-grey-8" underline="hover">
            Cookie Policy
          </Link>
          .
        </Typography>
      </Box>
      <Toast open={open} onClose={handleClose} severity="error" />
    </Container>
  );
};

export default GetStarted;
