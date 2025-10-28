import IconCloud from "./ui/iconcloud";

const slugs = [
  // Core Web
  "typescript",
  "javascript",
  "react",
  "nextdotjs",
  "html5",
  "css3",
  "tailwindcss",
  "shadcnui",

  // Backend
  "nodedotjs",
  "express",
  "fastapi",
  "mongodb",
  "mongoose",
  "postgresql",
  "prisma",

  // Cloud & Deployment
  "amazonaws",
  "vercel",
  "render",
  "netlify",
  "nginx",
  "docker",

  // Tools & Version Control
  "git",
  "github",
  "gitlab",
  "jira",
  "postman",
  "visualstudiocode",
  "androidstudio",

  // UI/UX & Design
  "figma",

  // OS / Misc
  "linux",
  "firebase",
  "solidity", // for blockchain or smart contracts
];

export function IconCloudDemo() {
  return (
    <div className="relative flex h-full w-full max-w-[40rem] items-center justify-center overflow-hidden rounded-lg  backdrop-blur-md px-20 pb-20 pt-8 shadow-lg">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
