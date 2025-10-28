"use client";
import React from "react";
import { motion } from "framer-motion";
import { LinkPreview } from "./ui/linkpreview";

export function LinkPreviewDemo() {
  return (
    <div className="flex justify-center items-center h-[40rem] flex-col px-4">
      <p className="text-neutral-500 dark:text-neutral-400 mt-0 text-xl md:text-3xl max-w-3xl mx-auto mb-10">
        I also create{" "}
        <LinkPreview url="https://github.com/moiqbalbbdniit/currencyconverter" className="font-bold">
          Currency Converter
        </LinkPreview>{" "}
        and{" "} have worked over projects like{ " "}
        <LinkPreview url="https://github.com/moiqbalbbdniit/MegablogReact" className="font-bold">
          MegaBlog Project using AppWrite
        </LinkPreview>{" "}
        and Personal Spotify.
      </p>
      <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto">
        Other small projects include password generator like{" "}
        <LinkPreview url="https://passgenbyiqbal.netlify.app/" className="font-bold">
         Random Password Generator
        </LinkPreview>{" "} and {" "}
        <LinkPreview url="https://github.com/moiqbalbbdniit/ai-meeting-summarizer" className="font-bold">
          AI Meeting Summarizer
        </LinkPreview>{" "} 
      
      </p>
    </div>
  );
}
