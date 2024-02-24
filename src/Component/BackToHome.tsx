import Link from "next/link";

export default function BackToHome() {
    return (
        <>
            <div className={'home'}>
                <span>Or </span>
                <Link href={'/'}>Back to Timer</Link>
            </div>
        </>
    )
}
