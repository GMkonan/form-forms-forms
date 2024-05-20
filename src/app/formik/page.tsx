"use client";
import FormContainer from "@/components/FormContainer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { sleep } from "@/lib/utils";
import { useFormik } from "formik";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";

const schema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

const formikSchema = toFormikValidationSchema(schema);

export default function Page() {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: formikSchema,
    onSubmit: async (values, { setStatus }) => {
      await sleep(2000);
      setStatus("success");
    },
  });

  return (
    <FormContainer>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-2 flex flex-col gap-2">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            name="email"
            type="email"
            className="border-input rounded-lg border p-1"
            onChange={formik.handleChange}
            value={formik.values.email}
            placeholder="email@example.com"
          />
        </div>
        {formik.errors.email && (
          <p className="pb-2 text-red-500">{formik.errors.email}</p>
        )}
        <Button className="w-full" type="submit" disabled={formik.isSubmitting}>
          Submit
        </Button>
      </form>
      {formik.status === "success" && (
        <p className="flex justify-center pt-2 text-lg text-green-500">
          Success!
        </p>
      )}
    </FormContainer>
  );
}
