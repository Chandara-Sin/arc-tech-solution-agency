import { object, string } from "yup";

export const signInSchema = object().shape({
  email: string()
    .email("Sorry, but that email is invalid.")
    .required("Please fill in your email.")
    .matches(/\S+@\S+\.\S+/, {
      message: "Invalid email format",
      excludeEmptyString: true,
    }),
});
