"use client";
import { toastError } from "@/app/features/error";
import { Image } from "@nextui-org/react";
import { useEffect, useState } from "react";

export default function Single({
  searchParams,
}: {
  searchParams: {
    id: number;
  };
}) {
  const [otherImages, setOtherImages] = useState<any[]>([]);
  const [isFetched, setIsFetched] = useState(false);
  useEffect(() => {
    const getImageData = async () => {
      try {
        const res = await fetch(
          `http://frey2fades-backend-production.up.railway.app/api/images/${searchParams.id}?populate=*`,
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
              src={`http://frey2fades-backend-production.up.railway.app${data.attributes.url}`}
              alt="Gallery"
            />
          ))}
      </div>
    </div>
  );
}
