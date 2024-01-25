"use client";
import { toastError } from "@/app/features/error";
import { STRAPI_BASE_URL } from "@/app/strapiSDK";
import { Image } from "@nextui-org/react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Single() {
  const [otherImages, setOtherImages] = useState<any[]>([]);
  const [isFetched, setIsFetched] = useState(false);

  const searchParams = useSearchParams();
  useEffect(() => {
    const getImageData = async () => {
      try {
        const res = await fetch(
          `${STRAPI_BASE_URL}/api/images/${searchParams.get("id")}?populate=*`,
        );
        const data = await res.json();
        console.log(data);
        setOtherImages(data.data.attributes.otherangles.data);
        setIsFetched(true);
      } catch (err) {
        toastError(err);
      }
    };
    getImageData();
  }, [searchParams]);
  return (
    <div className="text-center w-[1024px] p-3">
      <div className="grid grid-cols-3 gap-1">
        {isFetched &&
          otherImages &&
          otherImages.map((data) => (
            <Image
              className="h-96 hover:opacity-0.5"
              key={1}
              src={`${STRAPI_BASE_URL}${data.attributes.url}`}
              alt="Gallery"
            />
          ))}
      </div>
    </div>
  );
}
