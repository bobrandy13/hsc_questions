"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "~/components/ui/command";
import normaliseURL from "~/server/normaliseURL";
import { all_topics } from "~/server/topics";

export function CommandMenu() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === ";" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  //   const [search, setSearch] = useState("");

  const setSearch = (value: string) => {
    console.log("seaorched for", value);
    router.push(`/topics/${normaliseURL(value)}`);

    setOpen(false); // close the modal
  };

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput
        placeholder="Search for a topic"
        onSubmitCapture={() => console.log("potato")}
      />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          {all_topics.map((topic, key) => (
            <CommandItem key={key} onSelect={setSearch}>
              {topic}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
