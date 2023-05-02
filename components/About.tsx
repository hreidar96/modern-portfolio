import React from "react";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";
import Image from "next/image";

type Props = {
  pageInfo: PageInfo;
};

function About({ pageInfo }: Props) {
  return (
    <div className="flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 h-screen justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-[#F4D58D] text-2xl">
        About
      </h3>

      <div className="px-0 md:px-10">
        <Image
          src={urlFor(pageInfo?.profilePic).url()}
          alt="Profile picture"
          className="flex-shrink-0 rounded-full object-cover"
          height={200}
          width={150}
        />
        <h4 className="space-y-10 text-4xl font-semibold">
          Here is a{" "}
          <span className="decoration-[#E4572E]/50 underline">little</span>{" "}
          background
        </h4>
        <p className="text-lg">{pageInfo?.backgroundInformation}</p>
      </div>
    </div>
  );
}

export default About;
