interface RequestBody {
    email: string;
    password: string;
}

export async function POST(request: Request) {
    const body: RequestBody = await request.json()

    const res = await fetch(`${process.env.SERVER_API_URL}/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: body?.email,
            password: body?.password,
        }),
    });

    return new Response(JSON.stringify(res))
}