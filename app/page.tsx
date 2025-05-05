import Image from "next/image";
import { Major_Mono_Display } from "next/font/google";
import Link from "next/link";

const majorMono = Major_Mono_Display({
  subsets: ["latin"],
  weight: "400", // Major Mono Display typically only has 400 weight
  display: "swap",
});

export default function Home() {
  return (
    <>
      <Image
        className="rounded-full m-5 border-white border-2 absolute"
        src="/images/logo.png"
        width={60}
        height={60}
        alt="logo"
      />
      <div className="h-screen flex flex-col items-center justify-center">
        <div className="mb-60">
          <h1
            className={`text-white text-5xl sm:text-8xl md:text-8xl lg:text-8xl xl:text-8xl m-5 ${majorMono.className}`}
          >
            ZYROQUE
          </h1>
          <h2 className="text-white text-center text-2xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl">
            Coming soon..
          </h2>
        </div>
        <Link href="https://www.youtube.com/@zyroque" target="_blank">
          <Image
            className="scale-60 sm:scale-100 md:scale-100 lg:scale-100 xl-scale-100 transition-transform duration-300 ease-in-out transform hover:scale-120 hover:cursor-pointer"
            src="/images/yt_logo_rgb_dark.png"
            width={200}
            height={200}
            alt="logo"
          />
        </Link>
      </div>
    </>
  );
}
