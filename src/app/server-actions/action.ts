"use server";
import { sleep } from "@/lib/utils";
import { z } from "zod";

const schema = z.object({
  email: z.string().email({ message: "Email is not valid." }),
});

export default async function validateEmail(_: unknown, formData: FormData) {
  const validatedFields = schema.safeParse({
    email: formData.get("email"),
  });

  // Return early if the form data is invalid
  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  // a db call
  await sleep(2000);

  return { success: true, errors: null };
}
