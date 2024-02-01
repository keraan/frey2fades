"use client";
import { toastError } from "@/app/features/error";
import { STRAPI_BASE_URL } from "@/app/strapiSDK";
import { Image } from "@nextui-org/react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Portfolio() {
  const [imageObject, setImageObject] = useState<any[]>([]);

  useEffect(() => {
    const getImages = async () => {
      try {
        const res = await fetch(`${STRAPI_BASE_URL}/api/images?populate=*`);
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
    <div className="flex w-[1024px] p-3 justify-center">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        {imageObject &&
          imageObject.map((data, key) => (
            <Link
              href={{ pathname: "/portfolio/single", query: { id: data.id } }}
              key={key}
            >
              <Image
                className="h-96 max-w-80 hover:opacity-0.5"
                key={key}
                src={`${STRAPI_BASE_URL}${data.attributes.thumbnail.data.attributes.url}`}
                alt="Gallery"
                isZoomed
              />
            </Link>
          ))}
      </div>
    </div>
  );
}
