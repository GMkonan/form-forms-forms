"use client";
import FormContainer from "@/components/FormContainer";
// https://github.com/vercel/next.js/issues/65673 LOL
// import { useActionState } from "react";
import { useFormState } from "react-dom";
import { Button as ShadButton } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import validateEmail from "./action";
import { type ReactNode } from "react";
import { useFormStatus } from "react-dom";

const Button = ({ children }: { children: ReactNode }) => {
  const { pending } = useFormStatus();
  return (
    <ShadButton className="w-full" type="submit" disabled={pending}>
      {children}
    </ShadButton>
  );
};

export default function Page() {
  const [state, formAction] = useFormState(validateEmail, undefined);
  return (
    <FormContainer>
      <form action={formAction}>
        <div className="mb-2 flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            placeholder="email@example.com"
            className="border-input rounded-lg border p-1"
            type="email"
            name="email"
          />
        </div>
        {state?.errors && (
          <p className="pb-2 text-red-500">{state.errors.email}</p>
        )}
        <Button>Submit</Button>
      </form>
      {state?.success && (
        <div className="flex justify-center pt-2 text-lg text-green-500">
          Success!
        </div>
      )}
    </FormContainer>
  );
}
