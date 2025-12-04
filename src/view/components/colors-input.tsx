import { ChevronDownIcon } from "@radix-ui/react-icons";
import { cn } from "../../app/utils/class-name-merge";
import { DropdownMenu } from "./dropdown";
import { DropdownMenuContent } from "./dropdown/content";
import { DropdownMenuItem } from "./dropdown/item";
import { DropdownMenuTrigger } from "./dropdown/trigger";
import { FieldError } from "./field-error";
import { ColorIcon } from "./icons/color-icon";
import { useState } from "react";

interface ColorsDropdownInputProps {
  className?: string;
  error?: string;
}
type Colors = {
  color: string;
  bg: string;
};

const colors: Colors[] = [
  { color: "#868E96", bg: "#F8F9FA" },
  { color: "#FA5252", bg: "#FFF5F5" },
  { color: "#E64980", bg: "#FFF0F6" },
  { color: "#BE4BDB", bg: "#F8F0FC" },
  { color: "#7950F2", bg: "#F3F0FF" },
  { color: "#4C6EF5", bg: "#EDF2FF" },
  { color: "#228BE6", bg: "#E7F5FF" },
  { color: "#15AABF", bg: "#E3FAFC" },
  { color: "#12B886", bg: "#E6FCF5" },
  { color: "#40C057", bg: "#EBFBEE" },
  { color: "#82C91E", bg: "#F4FCE3" },
  { color: "#FAB005", bg: "#FFF9DB" },
  { color: "#FD7E14", bg: "#FFF4E6" },
  { color: "#212529", bg: "#F8F9FA" },
];

export function ColorsDropdownInput({
  className,
  error,
}: ColorsDropdownInputProps) {
  const [selectedColor, setSelectedColor] = useState<null | Colors>(null);

  function handleSelect(color: Colors) {
    setSelectedColor(color);
  }
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger
          asChild
          className={cn(
            "text-foreground/80 relative h-13 w-full rounded-lg border border-gray-500 bg-white px-3 text-left transition-all outline-none focus:border-gray-800",
            className,
            error && "!border-red-900",
          )}
        >
          <button>
            Cor
            <div className="absolute top-1/2 right-3 -translate-y-1/2">
              {!selectedColor && (
                <ChevronDownIcon className="text-foreground/90 size-6" />
              )}
              {selectedColor && (
                <ColorIcon color={selectedColor.color} bg={selectedColor.bg} />
              )}
            </div>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="grid grid-cols-4">
          {colors.map((color) => (
            <DropdownMenuItem
              key={color.color}
              onSelect={() => handleSelect(color)}
            >
              <ColorIcon color={color.color} bg={color.bg} />
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <FieldError error={error} />
    </div>
  );
}
