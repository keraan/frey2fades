"use client";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center m-10 h-full">
      <div className="flex items-center justify-center m-4">
        <h1 className="font-bold text-3xl">Socials</h1>
      </div>
      <div className="flex flex-row items-center justify-center gap-x-20 mt-19">
        <a
          href="https://www.instagram.com/patfreyz/"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src="/icons8-instagram-375.png"
            width="200"
            height="200"
            alt="frey 2 fade instagram"
          />
        </a>
        <a
          href="https://www.tiktok.com/@patfreyz?lang=en"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src="/icons8-tiktok-375.png"
            width="200"
            height="200"
            alt="frey 2 fade tiktok"
          />
        </a>
      </div>
      <div>
        <h1 className="m-10 text-lg">
          For any issues, please use my insta for any queries
        </h1>
      </div>
    </div>
  );
}
