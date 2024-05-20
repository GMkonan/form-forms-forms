export default function FormContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex h-full flex-col items-center justify-center">
      <div className="bg-muted mx-auto max-w-2xl rounded-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl font-semibold">Contact Me</h1>
          <span className="mb-4 text-lg">
            Fill up your email so nothing can happen
          </span>
        </div>
        {children}
      </div>
    </main>
  );
}
