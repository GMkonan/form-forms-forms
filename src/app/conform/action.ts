"use server";
import { parseWithZod } from "@conform-to/zod";
import { schema } from "./schema";
import { sleep } from "@/lib/utils";

export async function validateEmail(prevState: unknown, formData: FormData) {
  const submission = parseWithZod(formData, {
    schema: schema,
  });

  if (submission.status !== "success") {
    return submission.reply({
      formErrors: ["Email is not valid."],
    });
  }
  // make a db call
  await sleep(2000);
  return submission.reply();
}
