"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import submitForm from "~/server/submitForm";

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  topic: z.string().min(2, {
    message: "Topic must be at least 2 characters.",
  }),
  question_url: z.instanceof(File),

  answer_url: z.instanceof(File),
});

export default function ProfileForm() {
  // ...
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    form.reset();
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("topic", values.topic.toLowerCase());
    formData.append("question_url", values.question_url);
    formData.append("answer_url", values.answer_url);
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
          />{" "}
          <FormField
            control={form.control}
            name="topic"
            render={({ field }) => (
              <FormItem>
                <FormLabel>TOpic</FormLabel>
                <FormControl>
                  <Input
                    placeholder="topic"
                    {...field}
                    value={field.value ?? ""}
                  />
                </FormControl>
                <FormDescription>This is the topic</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="question_url"
            render={({ field }) => (
              <FormItem>
                <FormLabel>upload_url</FormLabel>
                <FormControl>
                  <Input
                    id="picture"
                    type="file"
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
