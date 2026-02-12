"use client";

import { ProjectsDialog } from "./projectsDialog";
import { Card } from "./ui/card";

interface ProjectProps {
  language: string;
}

export default function Projects(props: ProjectProps) {
  const titles = [
    "API Alô Doctor",
    "Web Alô Doctor",
    "To Do List",
    "NLW AI",
    "Alura Books",
    "Next CRUD",
  ];

  const subtitlePortuguese = [
    "Back-end do sistema Alô Doctor, desenvolvido em Node.js com TypeScript e Fastify, gerenciando chamados, leitos e autenticação.",
    "Interface web do Alô Doctor, criada com Next.js, permitindo a interação de pacientes e profissionais com os chamados e leitos.",
    "API de gerenciamento de tarefas desenvolvida em Java com Spring Boot, seguindo conceitos do curso da Rocketseat.",
    "Aplicação que utiliza inteligência artificial para gerar títulos e descrições para vídeos, baseada no evento NLW da Rocketseat.",
    "Biblioteca virtual desenvolvida em Next.js, criada no curso da Alura para gerenciar livros digitalmente.",
    "Aplicação para cadastro de nome e idade, desenvolvida em Next.js, baseada no curso da Cod3r.",
  ];

  const descriptionPortuguese = [
    "A API Alô Doctor é a base do sistema Alô Doctor, desenvolvida em Node.js com TypeScript e utilizando Fastify para otimizar a manipulação de requisições. Responsável pela comunicação entre pacientes e profissionais da saúde, a API permite a criação e gerenciamento de chamados, o controle de leitos e a autenticação segura por meio de tokens.",
    "O Web Alô Doctor é a interface gráfica do sistema, construída com Next.js para proporcionar uma experiência interativa e dinâmica. Essa aplicação permite que administradores, enfermeiros e pacientes acompanhem chamados hospitalares, gerenciem leitos disponíveis e visualizem pesquisas de satisfação, otimizando o fluxo de trabalho hospitalar.",
    "A To Do List é uma API de gerenciamento de tarefas desenvolvida em Java com Spring Boot, seguindo práticas modernas de desenvolvimento REST. O sistema permite que os usuários criem, atualizem, visualizem e excluam tarefas, organizando-as por status como pendente, em andamento e concluída.",
    "O NLW AI é um projeto que utiliza inteligência artificial para gerar títulos e descrições automáticas para vídeos. Desenvolvido durante o evento NLW da Rocketseat, esse sistema busca automatizar e otimizar o processo de criação de conteúdo, tornando a produção de vídeos mais eficiente.",
    "O Alura Books é uma biblioteca virtual interativa, desenvolvida em Next.js, que permite aos usuários explorar e gerenciar livros digitais. Criado como parte de um curso da Alura, o projeto ensina conceitos como componentização, consumo de APIs e estilização dinâmica.",
    "O Next CRUD é uma aplicação desenvolvida em Next.js que permite o cadastro e gerenciamento de usuários, armazenando informações como nome e idade. Baseado em um curso da Cod3r, o projeto ensina como criar e consumir APIs REST com um front-end eficiente.",
  ];

  const subtitleEnglish = [
    "Back-end of the Alô Doctor system, developed in Node.js with TypeScript and Fastify, managing calls, beds, and authentication.",
    "Web interface of Alô Doctor, built with Next.js, allowing patients and professionals to interact with calls and beds.",
    "Task management API developed in Java with Spring Boot, following concepts from the Rocketseat course.",
    "Application that uses artificial intelligence to generate titles and descriptions for videos, based on the NLW event by Rocketseat.",
    "Virtual library developed in Next.js, created in the Alura course to digitally manage books.",
    "Application for registering name and age, developed in Next.js, based on the Cod3r course.",
  ];

  const descriptionEnglish = [
    "The Alô Doctor API is the core of the Alô Doctor system, developed in Node.js with TypeScript and using Fastify to optimize request handling. Responsible for communication between patients and healthcare professionals, the API enables the creation and management of calls, bed control, and secure authentication through tokens.",
    "The Web Alô Doctor is the graphical interface of the system, built with Next.js to provide an interactive and dynamic experience. This application allows administrators, nurses, and patients to monitor hospital calls, manage available beds, and view satisfaction surveys, optimizing hospital workflow.",
    "The To Do List is a task management API developed in Java with Spring Boot, following modern REST development practices. The system allows users to create, update, view, and delete tasks, organizing them by status such as pending, in progress, and completed.",
    "NLW AI is a project that uses artificial intelligence to automatically generate titles and descriptions for videos. Developed during the NLW event by Rocketseat, this system aims to automate and optimize the content creation process, making video production more efficient.",
    "Alura Books is an interactive virtual library, developed in Next.js, that allows users to explore and manage digital books. Created as part of an Alura course, the project teaches concepts such as componentization, API consumption, and dynamic styling.",
    "Next CRUD is an application developed in Next.js that allows user registration and management, storing information such as name and age. Based on a Cod3r course, the project teaches how to create and consume REST APIs with an efficient front end.",
  ];

  const url = [
    "https://github.com/VictorHugoGutierrez/api-alodoctor",
    "https://github.com/VictorHugoGutierrez/web-alodoctor",
    "https://github.com/VictorHugoGutierrez/ToDoList",
    "https://github.com/VictorHugoGutierrez/NLW-AI",
    "https://github.com/VictorHugoGutierrez/AluraBooks",
    "https://github.com/VictorHugoGutierrez/next-crud",
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
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {titles.map((title, index) => (
            <Card
              key={index}
              className="card flex flex-col items-center rounded-ss-2xl p-6"
            >
              <p className="my-2 text-base md:text-lg">{title}</p>
              <p className="my-2 text-sm md:text-base w-full h-full">
                {props.language === "Portuguese"
                  ? subtitlePortuguese[index]
                  : subtitleEnglish[index]}
              </p>
              <ProjectsDialog
                language={props.language}
                title={title}
                description={
                  props.language === "Portuguese"
                    ? descriptionPortuguese[index]
                    : descriptionEnglish[index]
                }
                url={url[index]}
              />
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
