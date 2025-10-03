import { forwardRef, type ComponentProps } from "react";

interface InputProps extends ComponentProps<"input"> {
  name: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ name, placeholder, id, ...props }, ref) => {
    const inputId = id ?? name;
    return (
      <div className="relative">
        <input
          {...props}
          ref={ref}
          name={name}
          id={inputId}
          className="peer h-13 w-full rounded-lg border border-gray-500 bg-white px-3 pt-4 text-gray-800 transition-all outline-none placeholder-shown:pt-0 focus:border-gray-800"
          placeholder=" "
        />
        <label
          htmlFor={inputId}
          // className="absolute left-[13px] top-3.5 pointer-events-none text-gray-700"
          className="pointer-events-none absolute top-2 left-[13px] text-xs text-gray-700 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base"
        >
          {placeholder}
        </label>
      </div>
    );
  },
);
