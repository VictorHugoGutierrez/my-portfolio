"use client";

import Flag from "react-flagkit";
import { Button } from "./ui/button";

interface LanguageBtnProps {
  language: string;
  onClick?: () => void;
  size?: number | 40;
}

export default function LanguageBtn(props: LanguageBtnProps) {
  return (
    <Button
      id="buttonLanguage"
      onClick={props.onClick}
      variant="ghost"
      size="icon"
    >
      {props.language === "Portuguese" ? (
        <Flag
          country="US"
          size={props.size}
          className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all"
        />
      ) : (
        <Flag
          country="BR"
          size={props.size}
          className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all"
        />
      )}
    </Button>
  );
}
