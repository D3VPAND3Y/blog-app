import Link from "next/link";
import { useUser } from '@auth0/nextjs-auth0/client';
import Image from 'next/image';
import HeroImage from "../public/hero.webp"
export default function Home() {
  const { user, error, isLoading } = useUser();


  return (
    <div className="w-screen h-screen overflow-hidden flex justify-center items-center relative">
    <Image src={HeroImage} alt="Hero Image" />
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/50 to-black/50 backdrop-blur-sm">
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-4xl text-white font-bold py-2">Welcome to Blog-APP</h1>
        <p className="text-white">Get started by creating{' '}<code className="bg-gray-100 text-gray-900 rounded-md p-1">AI generated post</code></p>
        <div className="mt-4">
          <Link href="/post/new" className="btn">
            Login
          </Link>
          </div>
          </div>
    </div>
    </div>
  )
}
