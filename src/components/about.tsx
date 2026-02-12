"use client";

import { Separator } from "./ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

interface AboutProps {
  language: string;
}

export default function About(props: AboutProps) {
  return (
    <div
      className="flex min-h-screen items-center justify-center py-20"
      id="about"
    >
      <div className="container mx-auto">
        <h1 className="flex justify-center text-3xl font-bold md:text-5xl my-4">
          {props.language === "Portuguese" ? "Sobre" : "About"}
        </h1>
        <div className="flex justify-center w-full my-2">
          <div className="w-3/4">
            {props.language === "Portuguese" ? (
              <>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-lg">
                      Resumo
                    </AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground text-justify">
                      Desenvolvedor apaixonado por tecnologia e inovação.
                      Finalista da Olimpíada Brasileira de Informática,
                      conquistei a 292ª posição entre 5.609 participantes. Sou
                      Técnico em Desenvolvimento de Sistemas e estudante de
                      Análise e Desenvolvimento de Sistemas no Instituto Federal
                      de São Paulo. Atualmente, atuo como Desenvolvedor .NET na
                      Novara Sistemas, estou sempre buscando aprimorar minhas
                      habilidades e adquirir mais experiência na área que mais
                      me motiva: a tecnologia.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-lg">
                      Formação Acadêmica
                    </AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground">
                      Análise e Desenvolvimento de Sistemas.
                      <div className="flex md:h-5 items-center space-x-4 gap-y-4 text-sm">
                        <div>02/2025 - 12/2027</div>
                        <Separator orientation="vertical" />
                        <div>Cursando</div>
                        <Separator orientation="vertical" />
                        <div>
                          Instituto Federal de São Paulo - Campus Campinas
                        </div>
                      </div>
                    </AccordionContent>
                    <AccordionContent className="text-base text-muted-foreground">
                      Ensino Médio com Habilitação Técnica em Desenvolvimento de
                      Sistemas.
                      <div className="flex md:h-5 items-center space-x-4 gap-y-4 text-sm">
                        <div>01/2022 - 12/2024</div>
                        <Separator orientation="vertical" />
                        <div>Concluído</div>
                        <Separator orientation="vertical" />
                        <div>ETEC Polivalente de Americana</div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-lg">
                      Experiência Profissional
                    </AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground">
                      Desenvolvedor .NET.
                      <div className="flex md:h-5 items-center space-x-4 gap-y-4 text-sm">
                        <div>08/2024 - Atual</div>
                        <Separator orientation="vertical" />
                        <div>Novara Sistemas</div>
                      </div>
                    </AccordionContent>
                    <AccordionContent className="text-base text-muted-foreground">
                      Jovem Aprendiz / Estágio de Ensino Médio.
                      <div className="flex md:h-5 items-center space-x-4 gap-y-4 text-sm">
                        <div>07/2022 - 07/2024</div>
                        <Separator orientation="vertical" />
                        <div>MGK Soluções Industriais para Calderaria</div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </>
            ) : (
              <>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-lg">
                      Abstract
                    </AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground text-justify">
                      A developer passionate about technology and innovation.
                      Finalist in the Brazilian Informatics Olympiad, I achieved
                      292nd place among 5,609 participants. I am a Systems
                      Development Technician and a student of Systems Analysis
                      and Development at the Federal Institute of São Paulo.
                      Currently, I work as a .NET Developer at Novara Sistemas,
                      and I am always looking to improve my skills and gain more
                      experience in the area that motivates me the most:
                      technology.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-lg">
                      Academic Education
                    </AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground">
                      Systems Analysis and Development.
                      <div className="flex md:h-5 items-center space-x-4 gap-y-4 text-sm">
                        <div>02/2025 - 12/2027</div>
                        <Separator orientation="vertical" />
                        <div>Studying</div>
                        <Separator orientation="vertical" />
                        <div>
                          Federal Institute of São Paulo - Campinas Campus
                        </div>
                      </div>
                    </AccordionContent>
                    <AccordionContent className="text-base text-muted-foreground">
                      High School with Technical Qualification in Systems
                      Development.
                      <div className="flex md:h-5 items-center space-x-4 gap-y-4 text-sm">
                        <div>01/2022 - 12/2024</div>
                        <Separator orientation="vertical" />
                        <div>Done</div>
                        <Separator orientation="vertical" />
                        <div>ETEC Polivalente de Americana</div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-lg">
                      Professional Experience
                    </AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground">
                      .NET Developer.
                      <div className="flex md:h-5 items-center space-x-4 gap-y-4 text-sm">
                        <div>08/2024 - Current</div>
                        <Separator orientation="vertical" />
                        <div>Novara Sistemas</div>
                      </div>
                    </AccordionContent>
                    <AccordionContent className="text-base text-muted-foreground">
                      Young Apprentice / High School Internship.
                      <div className="flex md:h-5 items-center space-x-4 gap-y-4 text-sm">
                        <div>07/2022 - 07/2024</div>
                        <Separator orientation="vertical" />
                        <div>MGK Soluções Industriais para Calderaria</div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
