"use client";

import { useAuth, useUser } from "@clerk/nextjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Check, ChevronsUpDown } from "lucide-react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "~/components/ui/command";
import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import submitForm from "~/server/submitForm";
import { all_topics, subjects } from "~/server/topics";
import { cn } from "~/lib/utils";
import normaliseURL from "~/server/normaliseURL";

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  subject: z.string(),
  topic: z.string().min(2, {
    message: "Topic must be at least 2 characters.",
  }),
  question_url: z.instanceof(File),

  answer_url: z.instanceof(File),
});

export default function ProfileForm() {
  const { isLoaded, isSignedIn, user } = useUser();
  // ...
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    },
  });

  if (!isLoaded || !isSignedIn || !user) return <div>please sigin;</div>;
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    form.reset();
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("topic", normaliseURL(values.topic.toLowerCase()));
    formData.append("question_url", values.question_url);
    formData.append("answer_url", values.answer_url);
    formData.append("subject", values.subject);
    formData.append("name", user?.username ?? "random_name");
    const response = await submitForm(formData);

    if (!response) {
      alert("message not submitted");
    } else {
      alert("file uploaded");
    }
  }

  return (
    <div className="flex justify-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          encType="multipart/form-data"
          className="m-4 w-1/2 space-y-8"
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Question TItle"
                    {...field}
                    value={field.value ?? ""}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Subject</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        role="combobox"
                        className={cn(
                          "w-full justify-between",
                          !field.value && "text-muted-foreground",
                        )}
                      >
                        {field.value
                          ? subjects.find((subject) => subject === field.value)
                          : "Select subject"}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-[200px] p-0">
                    <Command>
                      <CommandInput placeholder="Search subject..." />
                      <CommandEmpty>No subject found.</CommandEmpty>
                      <CommandGroup>
                        {subjects.map((value: string, key: number) => (
                          <CommandItem
                            value={value}
                            key={key}
                            onSelect={() => {
                              form.setValue("subject", value);
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                value === field.value
                                  ? "opacity-100"
                                  : "opacity-0",
                              )}
                            />
                            {value}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </Command>
                  </PopoverContent>
                </Popover>
                <FormDescription>
                  This is the subject that this question will be under.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="topic"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Topic</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        role="combobox"
                        className={cn(
                          "w-full justify-between",
                          !field.value && "text-muted-foreground",
                        )}
                      >
                        {field.value
                          ? all_topics.find(
                              (language) => language === field.value,
                            )
                          : "Select topic"}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-[200px] p-0">
                    <Command>
                      <CommandInput placeholder="Search topic..." />
                      <CommandEmpty>No topic found.</CommandEmpty>
                      <CommandGroup>
                        {all_topics.map((value: string, key: number) => (
                          <CommandItem
                            value={value}
                            key={key}
                            onSelect={() => {
                              form.setValue("topic", value);
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                value === field.value
                                  ? "opacity-100"
                                  : "opacity-0",
                              )}
                            />
                            {value}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </Command>
                  </PopoverContent>
                </Popover>
                <FormDescription>
                  This is the topic that will be used in the dashboard.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="question_url"
            render={({ field }) => (
              <FormItem className="">
                <FormLabel>upload_url</FormLabel>
                <FormControl>
                  <Input
                    id="picture"
                    type="file"
                    className="dark:bg-none dark:text-black"
                    onChange={(e) =>
                      field.onChange(e.target.files ? e.target.files[0] : null)
                    }
                  />
                </FormControl>
                <FormDescription>THis is the question url</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="answer_url"
            render={({ field }) => (
              <FormItem>
                <FormLabel>answer file</FormLabel>
                <FormControl>
                  <Input
                    id="answer"
                    type="file"
                    onChange={(e) =>
                      field.onChange(e.target.files ? e.target.files[0] : null)
                    }
                  />
                </FormControl>
                <FormDescription>THis is the answer url</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
