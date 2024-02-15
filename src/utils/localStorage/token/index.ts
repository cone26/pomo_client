import {getLocalStorage} from "@/utils/localStorage/helper";

const TOKEN_KEY = process.env.NEXTAUTH_SECRET;

export const getToken = () => {
    return getLocalStorage<AccessTokenType>(TOKEN_KEY, {
        accessToken: null,
    })
}