"use client"
import { useEffect, useState } from "react";

export default function Portfolio() {
    const [urls, setUrls] = useState([]);

    useEffect(() => {
        const getImages = async () => {
            try {
                const res = await fetch('http://localhost:1338/api/images?populate=*');
                const data = await res.json();
                console.log(data);
                const fetchedUrls = data.data.map((image: any) => image.attributes.image.data.attributes.url);
                console.log(fetchedUrls);
                setUrls(fetchedUrls);
            } catch (err) {
                console.error(err);
            }
        };

        getImages();
    }, []);

    return (
        <div className="text-center w-[1024px] p-3">
            <div className="grid grid-cols-3 gap-1">
                {urls.map(url => <img className="h-96" key={url} src={`http://localhost:1338${url}`} alt="Gallery" />)}
            </div>
        </div>
    )
}