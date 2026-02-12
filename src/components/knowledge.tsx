"use client";

import { Card } from "./ui/card";

interface KnowledgeProps {
  language: string;
}

export default function Knowledge(props: KnowledgeProps) {
  const icons = [
    "html5",
    "css3",
    "javascript",
    "microsoftsqlserver",
    "nodejs",
    "tailwindcss",
    "typescript",
    "python",
    "react",
    "nextjs",
    "csharp",
    "dotnetcore",
  ];

  const iconsName = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "SQL",
    "Node.js",
    "TailwindCSS",
    "TypeScript",
    "Python",
    "React.js",
    "Next.js",
    "C#",
    ".NET",
  ];

  return (
    <div className="flex h-screen items-center justify-center" id="knowledge">
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
      />
      <div className="container mx-auto">
        <h1 className="flex justify-center text-3xl font-bold md:text-5xl my-4">
          {props.language === "Portuguese" ? "Conhecimentos" : "Knowledge"}
        </h1>
        <div className="mx-2 my-2 flex flex-wrap justify-center gap-4 md:justify-center md:gap-7">
          {icons.map((icon, index) => (
            <Card
              key={index}
              className="card md:my-2 flex w-1/4 flex-col items-center justify-start rounded-ss-2xl p-6 transition-all duration-300 md:w-40 md:hover:scale-125"
            >
              <p className="my-2 text-sm md:text-lg">{iconsName[index]}</p>
              <i
                className={`devicon-${icon}-plain text-2xl md:text-4xl text-blue-500`}
              ></i>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
