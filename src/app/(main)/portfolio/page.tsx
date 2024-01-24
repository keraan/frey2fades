"use client"
import { toastError } from "@/app/features/error";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Portfolio() {
    const [imageObject, setImageObject] = useState([]);

    useEffect(() => {
        const getImages = async () => {
            try {
                const res = await fetch('http://localhost:1338/api/images?populate=*');
                const data = await res.json();
                const fetchedUrls = data.data.map((data: any) => data);
                console.log(fetchedUrls)
                setImageObject(fetchedUrls);
            } catch (err) {
                toastError(err)
            }
        };

        getImages();
    }, []);

    return (
        <div className="text-center w-[1024px] p-3">
            <div className="grid grid-cols-3 gap-1">
                {imageObject.map(data => 
                    <Link href={{pathname: '/portfolio/single', query: {id: data.id}}}>
                        <img className="h-96 hover:opacity-0.5" key={1} src={`http://localhost:1338${data.attributes.thumbnail.data.attributes.url}`} alt="Gallery" />
                    </Link>)
                }
            </div>
        </div>
    )
}