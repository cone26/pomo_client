import "./Signup.css";
import Providers from "@/Component/Provider";


export default function SignuPLayout({
                                        children,
                                    }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body>
        {children}
        </body>
        </html>
    );
}
