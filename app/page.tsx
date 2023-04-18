import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Home',
  description: 'created Home page',
}


export default function Home() {
  return (
    <main>
      <h1>Hello </h1>
      <Link href="/about">Go to about page</Link>
    </main>
  )
}
