import type { ComponentProps } from "react";

interface inputProps extends ComponentProps<"input"> {
  name: string;
}

export function Input({ name, placeholder, id, ...props }: inputProps) {
  const inputId = id ?? name;
  return (
    <div className="relative">
      <input
        {...props}
        name={name}
        id={inputId}
        className="bg-white rounded-lg border w-full border-gray-500 px-3 h-13 text-gray-800 pt-4 peer placeholder-shown:pt-0  focus:border-gray-800 outline-none transition-all"
        placeholder=" "
      />
      <label
        htmlFor={inputId}
        // className="absolute left-[13px] top-3.5 pointer-events-none text-gray-700"
        className="absolute left-[13px] text-xs top-2 pointer-events-none text-gray-700 peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 transition-all"
      >
        {placeholder}
      </label>
    </div>
  );
}
