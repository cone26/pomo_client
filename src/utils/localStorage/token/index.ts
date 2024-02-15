import {getLocalStorage, removeLocalStorage, setLocalStorage} from "@/utils/localStorage/helper";
import {AccessTokenType} from "@/types/Auth.type";

const TOKEN_KEY = process.env.NEXTAUTH_SECRET || '@token';

export const getToken = () => {
    return getLocalStorage<AccessTokenType>(TOKEN_KEY, {
        accessToken: null,
    })
}

export const setToken = (token: AccessTokenType) => {
    setLocalStorage(TOKEN_KEY, token);
}

export const deleteToken = () => {
    removeLocalStorage(TOKEN_KEY)
}