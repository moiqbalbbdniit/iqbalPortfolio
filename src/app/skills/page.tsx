"use client";

import React from "react";
import { FaTools } from "react-icons/fa";
import { IconCloudDemo } from "@/components/skillcloud";

// Custom Code icon for animation
function CodeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

const SkillPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white p-6">
      <CodeIcon className="w-10 h-10 text-blue-500 animate-[pulse_2s_ease-in-out_infinite]" />
      <h1 className="text-center text-3xl font-extrabold my-6 tracking-wide text-foreground">
        ⚙️ My Skills
      </h1>
      <p className="text-center text-gray-400 max-w-2xl mb-8">
        Here are the technologies and tools I use to design, develop, and deploy
        high-quality full-stack web applications.
      </p>

      <div className="w-full flex justify-center mt-6">
        <IconCloudDemo />
      </div>
    </div>
  );
};

export default SkillPage;
