import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

interface ProjectsDialogProps {
  language: string;
  description: string;
  title: string;
  url: string;
}

export function ProjectsDialog(props: ProjectsDialogProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="link">
          {props.language === "Portuguese" ? "Ler mais..." : "Read more..."}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="w-3/4">
        <AlertDialogHeader>
          <AlertDialogTitle>{props.title}</AlertDialogTitle>
          <AlertDialogDescription className="text-justify">
            {props.description}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="my-2 md:my-auto">
          <AlertDialogCancel>
            {props.language === "Portuguese" ? "Fechar" : "Close"}
          </AlertDialogCancel>
          <AlertDialogAction>
            <a href={props.url} target="_blank">
              {props.language === "Portuguese" ? "Repositório" : "Repository"}
            </a>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
