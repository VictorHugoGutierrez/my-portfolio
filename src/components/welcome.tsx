"use function";

import { useState, useEffect } from "react";
import victorImage from "@/images/victor.jpeg";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { Button } from "./ui/button";

interface WelcomeProps {
  language: string;
  textTitle: string;
  textSubTitle: string;
}

export default function Welcome(props: WelcomeProps) {
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentSubTitle, setCurrentSubTitle] = useState("");
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentSubTitleIndex, setCurrentSubTitleIndex] = useState(0);

  useEffect(() => {
    setCurrentTitle("");
    setCurrentSubTitle("");
    setCurrentTitleIndex(0);
    setCurrentSubTitleIndex(0);
  }, [props.textTitle]);

  useEffect(() => {
    const titleTimeout = setTimeout(() => {
      if (currentTitleIndex < props.textTitle.length) {
        setCurrentTitle(
          (prevText) => prevText + props.textTitle[currentTitleIndex],
        );
        setCurrentTitleIndex((prevIndex) => prevIndex + 1);
      } else if (currentSubTitleIndex < props.textSubTitle.length) {
        setCurrentSubTitle(
          (prevText) => prevText + props.textSubTitle[currentSubTitleIndex],
        );
        setCurrentSubTitleIndex((prevIndex) => prevIndex + 1);
      }
    }, 100);

    return () => clearTimeout(titleTimeout);
  }, [
    props.textTitle,
    currentTitle,
    currentTitleIndex,
    currentSubTitle,
    currentSubTitleIndex,
  ]);

  return (
    <div
      className="flex min-h-screen flex-col items-center md:justify-center md:flex-row px-4 overflow-hidden"
      id="startPage"
    >
      <div className="flex w-full max-w-6xl flex-col items-center justify-center md:flex-row my-28 md:my-0 gap-10">
        <Avatar className="w-1/2 flex items-center justify-center md:w-1/3 flex-shrink-0">
          <AvatarImage
            src={victorImage.src}
            className="rounded-xl shadow-2xl ring-4 ring-gray-900"
          />
          <AvatarFallback>Foto do Victor Hugo</AvatarFallback>
        </Avatar>

        <div className="mx-4 flex flex-col items-center text-center md:mx-0 md:my-auto md:items-start md:text-start md:flex-1">
          <div className="relative w-full flex flex-col items-center md:items-start mb-4">
            <div className="invisible pointer-events-none" aria-hidden="true">
              <h1 className="text-3xl font-black lg:text-5xl mb-2">
                {props.textTitle}
              </h1>
              <p className="text-xl font-semibold lg:text-2xl">
                {props.textSubTitle}
              </p>
            </div>

            <div className="absolute top-0 flex flex-col items-center md:items-start w-full">
              <h1
                id="typing-title"
                className="text-3xl font-black lg:text-5xl mb-2 tracking-tight"
              >
                {currentTitle}
                {currentTitleIndex < props.textTitle.length && (
                  <span className="animate-pulse border-r-4 border-foreground ml-1"></span>
                )}
              </h1>
              <p className="text-xl font-semibold lg:text-2xl text-blue-500">
                {currentSubTitle}
                {currentTitleIndex >= props.textTitle.length &&
                  currentSubTitleIndex < props.textSubTitle.length && (
                    <span className="animate-pulse border-r-4 border-blue-500 ml-1"></span>
                  )}
              </p>
            </div>
          </div>

          <div className="mt-4 flex space-x-4 font-semibold">
            <Button asChild>
              <a
                download
                href={
                  props.language === "Portuguese"
                    ? "/victorCVBR.pdf"
                    : "/victorCVEN.pdf"
                }
                target="_blank"
              >
                {props.language === "Portuguese" ? "Baixar CV" : "Download CV"}
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a
                href="https://api.whatsapp.com/send?phone=5519992168212"
                target="_blank"
              >
                {props.language === "Portuguese"
                  ? "Entrar em Contato"
                  : "Contact Me"}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
