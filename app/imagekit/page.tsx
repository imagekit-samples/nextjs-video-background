"use client";

import Link from "next/link";
import Image from "next/image";
import { Video } from "@imagekit/next";
import { useEffect, useState } from "react";

const urlEndpoint = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT!;
const posterUrl = `${urlEndpoint}/bg-video.mp4/ik-thumbnail.jpg?tr=so-3`;

export default function ImageKitPage() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {prefersReducedMotion ? (
        <Image
          src={posterUrl}
          alt="Ocean waves background"
          fill
          priority
          className="object-cover"
        />
      ) : (
        <Video
          src="/bg-video.mp4"
          transformation={[{ width: 1280 }, { raw: "ac-none" }]}
          poster={posterUrl}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}

      <div className="absolute inset-0 bg-black/40">
        <div className="relative z-10 flex h-full flex-col items-center justify-center space-y-6 px-4 text-center text-white">
          <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
            Welcome to Our Site
          </h1>
          <p className="max-w-2xl text-xl text-gray-200 md:text-2xl">
            Experience stunning visuals with our video background hero section
          </p>
          <Link
            href="/"
            className="rounded-lg bg-white px-6 py-3 font-semibold text-black transition-colors hover:bg-gray-200"
          >
            Visit non-ImageKit version
          </Link>
        </div>
      </div>
    </div>
  );
}
