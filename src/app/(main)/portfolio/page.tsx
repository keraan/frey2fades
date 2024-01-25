"use client";
import { toastError } from "@/app/features/error";
import { Image } from "@nextui-org/react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Portfolio() {
  const [imageObject, setImageObject] = useState<any[]>([]);

  useEffect(() => {
    const getImages = async () => {
      try {
        const res = await fetch("http://localhost:1338/api/images?populate=*");
        const data = await res.json();
        const fetchedUrls = data.data;
        console.log(fetchedUrls);
        setImageObject(fetchedUrls);
      } catch (err) {
        toastError(err);
      }
    };

    getImages();
  }, []);

  return (
    <div className="text-center w-[1024px] p-3">
      <div className="grid grid-cols-3 gap-1">
        {imageObject &&
          imageObject.map((data, key) => (
            <Link
              href={{ pathname: "/portfolio/single", query: { id: data.id } }}
              key={key}
            >
              <Image
                className="h-96 hover:opacity-0.5"
                key={key}
                src={`http://localhost:1338${data.attributes.thumbnail.data.attributes.url}`}
                alt="Gallery"
                isZoomed
              />
            </Link>
          ))}
      </div>
    </div>
  );
}
