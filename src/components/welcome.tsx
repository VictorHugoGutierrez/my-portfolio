"use client";

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
      className="flex min-h-screen flex-col items-center md:justify-center md:flex-row"
      id="startPage"
    >
      <div className="flex h-1/2 my-28 md:my-0 items-center justify-center flex-col md:flex-row">
        <Avatar className="md:mx-10 w-1/2 md:w-1/4 flex items-center justify-center">
          <AvatarImage src={victorImage.src} className="rounded-xl" />
          <AvatarFallback>Logo</AvatarFallback>
        </Avatar>
        <div className="mx-10 my-4 md:my-auto md:text-start md:items-start text-center items-center flex flex-col">
          <h1
            id="typing-title"
            className="flex text-3xl font-black lg:text-5xl"
          >
            {currentTitle}
          </h1>
          <div>
            <p className="text-xl font-semibold lg:text-2xl text-blue-500">
              {currentSubTitle}
            </p>
          </div>
          <div className="my-3 flex space-x-4 font-semibold">
            <Button>
              {props.language === "Portuguese" ? (
                <a download href="/victorCVBR.pdf" target="_blank">
                  Baixar CV
                </a>
              ) : (
                <a download href="/victorCVEN.pdf" target="_blank">
                  Download CV
                </a>
              )}
            </Button>
            <Button>
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
