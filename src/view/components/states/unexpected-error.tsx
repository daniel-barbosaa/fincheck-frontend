import SafeErrorImg from "../../../assets/safe-error.png";
import { Button } from "../ui/button";

export function UnexpectedError() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center p-4">
      <img src={SafeErrorImg} alt="Imagem de erro" className="size-60" />
      <h1 className="text-foreground/90 text-5xl font-semibold">Ooops...</h1>
      <p className="text-md text-foreground/70 mt-1 text-center">
        Ocorreu um erro inesperado. Já estamos tentando resolver.
      </p>
      <Button className="mt-6" onClick={() => window.location.reload()}>
        Recarregar página
      </Button>
    </div>
  );
}
