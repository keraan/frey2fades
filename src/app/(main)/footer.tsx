"use client";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-white p-5 shadow-inner divide-y">
      <div className="flex flex-row justify-center items-center">
        <div className="mx-5">
          <a
            href="https://www.instagram.com/patfreyz/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/icons8-instagram-64.png"
              alt="frey 2 fade instagram"
              width={40}
              height={40}
            />
          </a>
        </div>
        <div className="mx-5">
          <a
            href="https://www.tiktok.com/@patfreyz?lang=en"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/icons8-tiktok-64.png"
              alt="frey 2 fade instagram"
              width={40}
              height={40}
            />
          </a>
        </div>
      </div>
      <div className="flex justify-center items-center m-3 text-black opacity-70 ">
        <p className="my-5 text-center">
          Developed and maintained by Kieran Huynh & Leo Maisnam
        </p>
      </div>
    </div>
  );
}
