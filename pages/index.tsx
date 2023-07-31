import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Loader from "@/components/Loader";
import toast from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      {/* <Loader show={true}/> */}
      <main>
        <h1>Main Home Page</h1>
        <button onClick={() => toast.success('hello toast!')}>Toast Me</button>
      </main>
    </>
  )
}
