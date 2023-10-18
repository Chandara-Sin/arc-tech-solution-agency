import { IFormSignIn } from "../../pages/authen/AuthenType";
import { httpClient } from "../client";
import { IAuthCodeBody, IAuthCodeRes, ISignUpBody, ISignUpRes } from "./Types";

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

export const verifyCode = (code: string, token: string) =>
  new Promise((resolve: (value: IAuthCodeRes) => void, reject) => {
    const data: IAuthCodeBody = {
      grant_type: "verify_code",
      auth_code: code,
      token,
    };
    httpClient
      .post("/oauth/authcode", data, {
        headers: header,
      })
      .then(({ data }) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
