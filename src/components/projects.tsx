"use client";

import { ProjectsDialog } from "./projectsDialog";
import { Card } from "./ui/card";

interface ProjectProps {
  language: string;
}

export default function Projects(props: ProjectProps) {
  const projectsData = [
    {
      title: "API Alô Doctor",
      url: "https://github.com/VictorHugoGutierrez/api-alodoctor",
      subtitle: {
        pt: "API RESTful de alta performance para gestão hospitalar. Arquitetada com Node.js, Fastify e TypeScript.",
        en: "High-performance RESTful API for hospital management. Architected with Node.js, Fastify, and TypeScript.",
      },
      description: {
        pt: "Arquitetura back-end central do ecossistema Alô Doctor. Construída para suportar alta concorrência utilizando Fastify, a API orquestra o fluxo de chamados hospitalares, gestão dinâmica de leitos e sistema de autenticação segura (JWT). Foco em tipagem estrita com TypeScript para garantir estabilidade, segurança dos dados e escalabilidade.",
        en: "Core back-end architecture of the Alô Doctor ecosystem. Built to handle high concurrency using Fastify, the API orchestrates the flow of hospital calls, dynamic bed management, and secure authentication (JWT). Focused on strict typing with TypeScript to ensure stability, data security, and scalability.",
      },
    },
    {
      title: "Web Alô Doctor",
      url: "https://github.com/VictorHugoGutierrez/web-alodoctor",
      subtitle: {
        pt: "Dashboard interativo para gestão hospitalar. Desenvolvido em Next.js focando em UX e consumo eficiente da API.",
        en: "Interactive dashboard for hospital management. Built with Next.js focusing on UX and efficient API consumption.",
      },
      description: {
        pt: "Aplicação front-end (SPA) construída com Next.js (React) para o sistema Alô Doctor. O painel centraliza a tomada de decisão, permitindo que administradores e enfermeiros gerenciem leitos, monitorem chamados em tempo real e analisem métricas de satisfação. Implementação focada em responsividade e integração fluida com o back-end.",
        en: "Front-end application (SPA) built with Next.js (React) for the Alô Doctor system. The dashboard centralizes decision-making, allowing administrators and nurses to manage beds, monitor real-time calls, and analyze satisfaction metrics. Implementation focused on responsiveness and fluid back-end integration.",
      },
    },
    {
      title: "API de Pedidos",
      url: "https://github.com/VictorHugoGutierrez/Pedidos-API",
      subtitle: {
        pt: "API RESTful de alta performance para processamento e gerenciamento de pedidos utilizando Node.js, Fastify e Prisma.",
        en: "High-performance RESTful API for order processing and management using Node.js, Fastify, and Prisma.",
      },
      description: {
        pt: "Arquitetura de back-end desenvolvida para suportar operações transacionais robustas (como e-commerces e PDVs). O núcleo foi construído com Fastify para garantir um tempo de resposta ultrarrápido e baixo consumo de recursos. A camada de dados utiliza Prisma ORM para garantir uma modelagem segura, tipada e migrações eficientes, cobrindo todo o ciclo de vida de produtos e pedidos em um banco de dados relacional.",
        en: "Back-end architecture designed to support robust transactional operations (such as e-commerce and POS systems). The core was built with Fastify to ensure ultra-fast response times and low resource consumption. The data layer uses Prisma ORM to guarantee safe, typed modeling and efficient migrations, covering the entire lifecycle of products and orders in a relational database.",
      },
    },
  ];

  return (
    <div
      className="flex min-h-screen items-center justify-center px-4 py-20"
      id="projects"
    >
      <div className="container mx-auto">
        <h1 className="flex justify-center text-3xl font-bold md:text-5xl my-4">
          {props.language === "Portuguese" ? "Projetos" : "Projects"}
        </h1>

        <div className="grid gap-6 mt-10 sm:grid-cols-1 md:grid-cols-2 lg:max-w-4xl lg:mx-auto">
          {projectsData.map((project, index) => (
            <Card
              key={index}
              className="card flex flex-col items-center rounded-ss-2xl p-6 text-center"
            >
              <p className="my-2 text-xl font-semibold md:text-2xl">
                {project.title}
              </p>

              <p className="my-4 text-sm md:text-base w-full flex-grow text-gray-300">
                {props.language === "Portuguese"
                  ? project.subtitle.pt
                  : project.subtitle.en}
              </p>

              <div className="mt-auto w-full">
                <ProjectsDialog
                  language={props.language}
                  title={project.title}
                  description={
                    props.language === "Portuguese"
                      ? project.description.pt
                      : project.description.en
                  }
                  url={project.url}
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
