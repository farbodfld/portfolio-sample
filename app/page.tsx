import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      {/* Main section of home-page */}
      <div
        className="flex items-center w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url(/main-bg.webp)" }}
      >
        <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex-col mr-10 gap-5 max-w-[750px] z-10 max-sm:w-full max-sm:gap-12 max-sm:items-center">
          <h1 className="text-[50px] text-white max-sm:text-4xl font-semibold">
            {" "}
            Every thing is possible with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              <br />
              Website Developing
            </span>
          </h1>
          <p className="text-gray-200 hidden md:block">
            Welcome to my digital playground! I’m a passionate full-stack
            developer who loves turning ideas into reality through clean,
            efficient code. With a knack for both front-end and back-end
            development, I build web applications that are not only functional
            but also visually captivating.
          </p>
          <div className="max-sm:flex-col max-sm:text-center md:flex-row flex gap-5">
            <Link
              href="/my-skills"
              className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px] z-50 mt-5"
            >
              More Information
            </Link>
            <Link
              href="/my-projects"
              className="rounded-[20px] group relative bg-transparent px-5 py-3 text-lg text-white max-w-[200px] border border-white mt-5"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
              My Projects
            </Link>
            <Link
              href="/contact-me"
              className="rounded-[20px] group relative bg-transparent px-5 py-3 text-lg text-white max-w-[200px] border border-white mt-5"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
              Contact Me
            </Link>
          </div>
        </div>
      </div>

      {/* Unicorn background */}
      <div className="absolute scale-x-100 bottom-0 right-0 max-sm:hidden">
        <Image
          src="/horse.png"
          alt="horse"
          height={300}
          width={300}
          className="absolute right-55 top-40"
        ></Image>

        <Image src="/cliff.webp" alt="cliff" width={480} height={480}></Image>
      </div>

      {/* Trees background */}
      <div className="absolute bottom-0 z-[5] w-full h-auto">
        <Image src="/trees.webp" alt="trees" width={2000} height={2000} className="w-full h-full"/>
      </div>
    </main>
  );
}
