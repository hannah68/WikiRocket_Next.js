import Link from "next/link"

export const metadata = {
  title: 'About',
  description: 'created About page',
}

export default function About() {
  return (
    <>
        <h1>About</h1>
        <Link href="/">Back to Home</Link>
    </>
  )
}
