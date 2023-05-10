import { IFormSignIn } from "../../pages/authen/AuthenType";
import { httpClient } from "../client";
import { ISignUpBody, ISignUpRes } from "./Types";

const header = { "X-API-Key": import.meta.env.VITE_API_PUBLIC_KEY ?? "" };

export const signUp = ({ email }: IFormSignIn) =>
  new Promise((resolve: (value: ISignUpRes) => void, reject) => {
    const data: ISignUpBody = {
      grant_type: "auth_code",
      email,
    };
    httpClient
      .post("/oauth/signup", data, {
        headers: header,
      })
      .then(({ data }) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
