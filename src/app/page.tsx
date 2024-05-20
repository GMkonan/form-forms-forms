import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mt-72 flex h-full flex-col items-center">
      <h1 className="text-2xl font-semibold">
        A bunch of different ways of doing forms
      </h1>
      <div className="mt-8 flex flex-col items-center">
        <div className="flex gap-x-2">
          <Button variant="link" asChild>
            <Link href="/react-hook-form">React Hook Form</Link>
          </Button>
          <Button variant="link" asChild>
            <Link href="/conform">Conform</Link>
          </Button>
          <Button variant="link" asChild>
            <Link href="/server-actions">Server Actions</Link>
          </Button>
          <Button variant="link" asChild>
            <Link href="/formik">Formik</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
