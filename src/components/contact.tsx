import { FaPhoneAlt, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

interface ContactProps {
  language: string;
}

export default function Contact(props: ContactProps) {
  return (
    <div className="flex h-screen items-center justify-center" id="contact">
      <div className="justify-center p-8 text-center">
        <h1 className="my-10 flex justify-center text-3xl font-bold md:text-5xl">
          {props.language === "Portuguese" ? "Contato" : "Contact"}
        </h1>
        <div className="flex flex-col gap-8 items-center justify-center space-y-5 md:flex-row lg:gap-28 md:space-y-0">
          <a
            href="mailto:hugovictorgutierrez@gmail.com"
            target="_blank"
            className="flex flex-col items-center justify-center transition-all duration-200 hover:scale-110"
          >
            <FaEnvelope className="h-12 w-12 p-2 lg:h-14 lg:w-14 text-primary" />
            <h1 className="text-base font-semibold md:text-lg">
              {props.language === "Portuguese" ? "Email" : "E-mail"}
            </h1>
            <p className="text-sm md:text-base">
              hugovictorgutierrez@gmail.com
            </p>
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5519992168212"
            target="_blank"
            className="flex flex-col items-center justify-center transition-all duration-200 hover:scale-110"
          >
            <FaPhoneAlt className="h-12 w-12 p-2 lg:h-14 lg:w-14 text-primary" />
            <h1 className="text-base font-semibold md:text-lg">
              {props.language === "Portuguese" ? "Telefone" : "Phone"}
            </h1>
            <p className="text-sm md:text-base">(19) 99216-8212</p>
          </a>
          <a
            href="https://www.linkedin.com/in/victor-hugo-gutierrez?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BSn37BDeDSPqmibzV%2BW5kjg%3D%3D"
            target="_blank"
            className="flex flex-col items-center justify-center transition-all duration-200 hover:scale-110"
          >
            <FaLinkedin className="h-12 w-12 p-2 lg:h-14 lg:w-14 text-primary" />
            <h1 className="text-base font-semibold md:text-lg">LinkedIn</h1>
            <p className="text-sm md:text-base">@victor-hugo-gutierrez</p>
          </a>
          <a
            href="https://github.com/VictorHugoGutierrez"
            target="_blank"
            className="flex flex-col items-center justify-center transition-all duration-200 hover:scale-110"
          >
            <FaGithub className="h-12 w-12 p-2 lg:h-14 lg:w-14 text-primary" />
            <h1 className="text-base font-semibold md:text-lg">GitHub</h1>
            <p className="text-sm md:text-base">@VictorHugoGutierrez</p>
          </a>
        </div>
      </div>
    </div>
  );
}
