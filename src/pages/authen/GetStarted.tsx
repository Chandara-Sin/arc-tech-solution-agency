import { FC } from "react";
import "./Authen.css";
import { useAuth } from "../../contexts/Auth";
import { useNavigate } from "react-router-dom";
import { IFormSignInProps } from "./AuthenType";
import { signInSchema } from "./AuthenSchema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box,
  Button,
  Container,
  Link,
  TextField,
  Typography,
} from "@mui/material";

const GetStarted: FC = () => {
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
    </Container>
  );
};

export default GetStarted;
