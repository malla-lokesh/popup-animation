"use client";

import { gsap } from "gsap";
import { useEffect, useState } from "react";

export default function Home() {
  const [cookie, setCookie] = useState(true);
  gsap.defaults({ duration: 0.2 });

  useEffect(() => {
    gsap.fromTo(".cookie", { y: 200 }, { y: 0, duration: 0.75 });
  }, []);

  const handleCookie = () => {
    gsap.to(".cookie", {
      y: 200,
      opacity: 0,
      onComplete: () => {
        setCookie(false);
      },
    });
  };

  return (
    <main className="relative min-h-screen">
      {cookie && (
        <div className="cookie absolute bottom-8 right-8 flex flex-col gap-4 bg-gray-800 text-white px-8 py-5 w-96 rounded-xl leading-7 text-sm">
          <div className="text">
            This website uses cookies to ensure you get the best experience on
            our website.{" "}
            <span className="underline underline-offset-4 decoration-gray-300">
              Cookies policy
            </span>
          </div>
          <div className="inline-block button">
            <button
              className="bg-white text-gray-950 rounded-lg px-4 py-2"
              onClick={handleCookie}
            >
              GOT IT
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
