"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface iAppProps {
  images: string[];
}

export function ImageSlider({ images }: iAppProps) {
  const [mainImageIndex, setMainImageIndex] = useState(0);

  function handlePreviousClick() {
    setMainImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }

  function handleNextClick() {
    setMainImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }

  function handleImageClick(index: number) {
    setMainImageIndex(index);
  }

  return (
    <div className="grid gap-6 md:gap-3 items-center">
      <div className="relative overflow-hidden rounded-lg">
        <Image
          width={100}
          height={100}
          src={images[mainImageIndex]}
          alt="Product Image"
          className="object-cover w-[600px] h-[600px]"
        />

        <div className="absolute inset-0 flex items-center justify-between px-4">
          <Button variant="ghost" size="icon" onClick={handlePreviousClick}>
            <ChevronLeft className="w-6 h-6" />
          </Button>

          <Button variant="ghost" size="icon" onClick={handleNextClick}>
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-4">
        {images.map((image, index) => (
          <div
            className={cn(
              index === mainImageIndex
                ? "border-2 border-primary"
                : "border border-gray-200",
              "relative overflow-hidden rounded-lg cursor-pointer"
            )}
            key={index}
            onClick={() => handleImageClick(index)}
          >
            <Image
              src={image}
              alt="Product Image"
              width={100}
              height={100}
              className="object-cover w-[100px] h-[100px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
