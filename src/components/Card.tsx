"use client";

import Image from "next/image";

interface CardProps {
  venueName?: string;
  imgSrc?: string;
}

export default function Card({
  venueName = "Default Venue",
  imgSrc = "/img/default.jpg",
}: CardProps) {
  return (
    <div className="w-[300px] rounded-xl overflow-hidden shadow-lg bg-white">
      <div className="relative w-full h-[200px]">
        <Image
          src={imgSrc}
          alt={venueName}
          fill
          className="object-cover"
          draggable={false}
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{venueName}</h2>
      </div>
    </div>
  );
}
