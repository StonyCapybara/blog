import Link from "next/link";
import { DM_Serif_Text } from "next/font/google";

const dm = DM_Serif_Text({
  weight: "400",
  subsets: ["latin"]
})

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center bg-neutral-900 text-white px-3 sm:px-6 md:px-12 lg:px-16 py-4 md:py-6 mb-6 md:mb-8 shadow-md shadow-neutral-800">
      <div className="text-3xl md:text-4xl font-bold">
        <Link href="/" className={"transition-all hover:text-cyan-200 hover:underline " + dm.className}>Blog</Link>
      </div>
      <div className="flex justify-between items-center gap-3 lg:gap-6 text-lg md:text-xl underline-offset-4">
        <Link href="/blog" className="hover:underline-offset-2 focus:underline-offset-2 transition-all underline hover:text-cyan-200 focus:text-cyan-200">Blogs</Link>
        <Link href="/contact" className="hover:underline-offset-2 focus:underline-offset-2 transition-all underline hover:text-cyan-200 focus:text-cyan-200">Contact</Link>
        {/* <Link href="/" className="hover:underline-offset-2 focus:underline-offset-2 transition-all underline hover:text-cyan-200 focus:text-cyan-200">Portfolio</Link> */}
      </div>
    </nav>
  );
}