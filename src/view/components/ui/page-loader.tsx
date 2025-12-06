import { Spinner } from "./spinner";

export function PageLoader() {
  return (
    <h1 className="fixed top-0 left-0 grid h-full w-full place-items-center bg-gray-50">
      <Spinner />
    </h1>
  );
}
