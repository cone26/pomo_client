export type TokenType = NullAble<{
    data: AccessTokenType;
}>

export type AccessTokenType = NullAble<{
    accessToken: string;
}>;

export type RefreshTokenType = NullAble<{
    refreshToken: string;
}>

export type UserRegistrationReturnType = {
    code: number;
    message: string;
    data?: any;
}

export type GetAccessTokenReturnType  = {
    code: number;
    data: AccessTokenType;
    message: string;
}

export type RequestReturnType = {
    code: number;
    data: { accessToken: string; refreshToken: string };
    message: string;
}

export type LogoutReturnType = {
    code: number;
    data: {};
    message: string;
}