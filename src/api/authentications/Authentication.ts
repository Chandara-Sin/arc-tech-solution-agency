import { httpClient } from "../client";
import { ISignUpBody, ISignUpRes } from "./Types";

const header = { "X-API-Key": import.meta.env.VITE_API_PUBLIC_KEY ?? "" };

export const signUp = (body: ISignUpBody) =>
  new Promise((resolve: (value: ISignUpRes) => void, reject) => {
    httpClient
      .post("/oauth/signup", body, {
        headers: header,
      })
      .then(({ data }) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
