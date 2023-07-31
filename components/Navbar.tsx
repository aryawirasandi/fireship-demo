import { UserContext } from "@/lib/context";
import Link from "next/link";
import { useContext } from "react";
import Image from "next/image";
export default function Navbar(){
    const { user, username } = useContext(UserContext)
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link href="/">
                        <button className="btn-logo">FEED</button>
                    </Link>
                </li>
                {/* user signed-in and has username */}
                {username && <>
                    <li className="push-left">
                        <Link href="/admin">
                            <button className="btn-blue">Write Posts</button>
                        </Link>
                    </li>
                    <li>
                        <Link href={`/${username}`}>
                            {user?.photoURL ? (<Image src={user?.photoURL} alt="test" width={512} height={512}/>) : (<Image src={`/hacker.png`} width={512} height={512} alt="hacker"/>)}
                        </Link>
                    </li>
                </>}
                {!username && <>
                    <li>
                        <Link href="/enter">
                            <button className="btn-blue">Log In</button>
                        </Link>
                    </li>
                </>}
            </ul>
        </nav>
    )
}