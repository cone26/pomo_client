// import {setToken} from "@/utils/localStorage/token";
// import {CONFIG} from "../../../../config";
//
// interface RequestBody {
//     email: string;
//     password: string;
// }
//
// export async function POST(request: Request) {
//     const body: RequestBody = await request.json()
//
//     const res = await fetch(`${CONFIG.SERVER}/auth/login`, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//             email: body?.email,
//             password: body?.password,
//         }),
//     });
//     // const user = await res.json()
//     // setToken({
//     //     accessToken: user.data.accessToken
//     // })
//     return new Response(JSON.stringify(res))
// }
