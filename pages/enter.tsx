
import { UserContext } from "@/lib/context";
import { auth, googleAuthProvider } from "@/lib/firebase";
import Image from "next/image";
import { useContext, useState } from "react";
import Head from "next/head";
export default function EnterPage(){
    const { user, username } = useContext(UserContext)

    return (
        <>
            <Head>
                <title>
                    Enter
                </title>
                <meta name="description" content="Sign up for this amazing app!" />
            </Head>
        <main>
        
            {user ? 
                !username ? <UsernameForm/> : <SignOutButton/>
            : <SignInButton/> }
        </main>
    </>
    )
}

function SignInButton(){
    const signInWithGoogle = async () => {
        await auth.signInWithPopup(googleAuthProvider)
    };

    return (
        <button className="btn-google" onClick={signInWithGoogle}>
            <Image src={'/google.png'} width={32} height={32} alt="google" /> Sign in With Google
        </button>
    )
}

function SignOutButton(){
    return <button onClick={() => auth.signOut()}>Sign Out</button>
}

function UsernameForm(){
    const [formValue, setFormValue] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [loading, setLoading] = useState(false);

    const { user, username } = useContext(UserContext);

    return <p>Yo u dont have a username</p>;
}

function UsernameMessage({username, isValid, loading}: {
    username: string,
    isValid: boolean,
    loading: boolean
}){
    if (loading){
        return <p>Checking....</p>
    }else if (isValid){
        return <p className="text-success">{username} is available!</p>
    }else if(username && !isValid){
        return <p className="text-danger">That username is taken!</p>
    }else{
        return <p></p>
    }
}