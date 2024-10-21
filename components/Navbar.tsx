import React from "react";
import { Socials } from "@/constants";
import Image from "next/image";

const navbar = () => {
  return (
    <div className="fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20">
      {/* Owners name */}
      <div className="flex flex-row gap-3 items-center">
        <h1 className="text-white text-[25px] font-semibold">
          Farbod{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500 ml-3">
            Fooladi
          </span>
        </h1>
      </div>

      {/* SOcial medias icons section */}
      <div className="flex flex-row gap-5 mb-2">
        {Socials.map((social) => (
          <Image
            key={social.name}
            src={social.src}
            alt={social.name}
            width={28}
            height={28}
          />
        ))}
      </div>
    </div>
  );
};

export default navbar;
