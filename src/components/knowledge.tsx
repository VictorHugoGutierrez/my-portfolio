"use client";

import { Card } from "./ui/card";

interface KnowledgeProps {
  language: string;
}

export default function Knowledge(props: KnowledgeProps) {
  const knowledgeCategories = [
    {
      title:
        props.language === "Portuguese"
          ? "Back-end & Arquitetura"
          : "Back-end & Architecture",
      skills: [
        { name: "C#", icon: "csharp" },
        { name: ".NET", icon: "dotnetcore" },
        { name: "Node.js", icon: "nodejs" },
        { name: "TypeScript", icon: "typescript" },
        { name: "SQL", icon: "microsoftsqlserver" },
        { name: "Python", icon: "python" },
      ],
    },
    {
      title:
        props.language === "Portuguese"
          ? "Front-end & Interface"
          : "Front-end & Interface",
      skills: [
        { name: "Next.js", icon: "nextjs" },
        { name: "React.js", icon: "react" },
        { name: "TailWindCSS", icon: "tailwindcss" },
      ],
    },
  ];

  return (
    <div
      className="flex min-h-screen items-center justify-center py-20"
      id="knowledge"
    >
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
      />
      <div className="container mx-auto">
        <h1 className="flex justify-center text-3xl font-bold md:text-5xl my-8">
          {props.language === "Portuguese" ? "Conhecimentos" : "Knowledge"}
        </h1>

        <div className="flex flex-col gap-12 mt-8">
          {knowledgeCategories.map((category, catIndex) => (
            <div key={catIndex} className="flex flex-col items-center">
              <h2 className="text-xl md:text-2xl font-semibold mb-6 text-gray-400">
                {category.title}
              </h2>
              <div className="mx-2 flex flex-wrap justify-center gap-4 md:justify-center md:gap-7">
                {category.skills.map((skill, index) => (
                  <Card
                    key={index}
                    className="card md:my-2 flex w-28 flex-col items-center justify-start rounded-ss-2xl p-6 transition-all duration-300 md:w-40 md:hover:scale-125"
                  >
                    <p className="my-2 text-sm md:text-lg">{skill.name}</p>
                    <i
                      className={`devicon-${skill.icon}-plain text-3xl md:text-4xl text-blue-500`}
                    ></i>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
