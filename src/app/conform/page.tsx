"use client";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { useFormState, useFormStatus } from "react-dom";
import { validateEmail } from "./action";
import { schema } from "./schema";
import FormContainer from "@/components/FormContainer";
import { Button as ShadButton } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { type ReactNode } from "react";

const Button = ({ children }: { children: ReactNode }) => {
  const { pending } = useFormStatus();
  return (
    <ShadButton className="w-full" type="submit" disabled={pending}>
      {children}
    </ShadButton>
  );
};

export default function Page() {
  const [lastResult, action] = useFormState(validateEmail, undefined);
  const [form, fields] = useForm({
    // Sync the result of last submission
    lastResult,

    // Reuse the validation logic on the client
    onValidate({ formData }) {
      return parseWithZod(formData, { schema });
    },

    // Validate the form on blur event triggered
    shouldValidate: "onInput",
  });
  return (
    <FormContainer>
      <form id={form.id} onSubmit={form.onSubmit} action={action} noValidate>
        <div className="mb-2 flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            placeholder="email@example.com"
            className="border-input rounded-lg border p-1"
            type="email"
            name={fields.email.name}
          />
        </div>
        <p className="pb-2 text-red-500">{fields.email.errors}</p>
        <Button>Submit</Button>
      </form>
      {lastResult?.status === "success" && (
        <div className="flex justify-center pt-2 text-lg text-green-500">
          Success!
        </div>
      )}
    </FormContainer>
  );
}
