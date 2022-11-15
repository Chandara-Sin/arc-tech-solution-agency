import * as yup from "yup";

export const signInSchema = yup.object().shape({
  email: yup
    .string()
    .email("Sorry, but that email is invalid.")
    .required("Please fill in your email."),
});
