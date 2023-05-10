type TTokenType = "Bearer" | "ID";

type TGrantType = "auth_code" | "verify_code";

export interface ISignUpRes {
  auth_code: string;
  access_token: string;
  token_type: TTokenType;
}

export interface ISignUpBody {
  email: string;
  grant_type: TGrantType;
}
