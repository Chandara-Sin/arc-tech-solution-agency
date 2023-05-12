type TTokenType = "Bearer" | "ID";

type TGrantType = "auth_code" | "verify_code";

export interface ISignUpRes {
  access_token: string;
  token_type: TTokenType;
}

export interface ISignUpBody {
  email: string;
  grant_type: TGrantType;
}

export interface IAuthCodeBody {
  auth_code: string;
  token: string;
  grant_type: TGrantType;
}

export interface IAuthCodeRes {
  session_token: string;
  token_type: TTokenType;
}
