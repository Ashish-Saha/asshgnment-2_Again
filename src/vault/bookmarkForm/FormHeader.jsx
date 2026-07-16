export default function FormHeader() {
  return (
    <>
      <div className="mb-8 flex flex-col gap-3">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">
          New bookmark
        </p>
        <h2 className="text-2xl font-semibold">
          Store website credentials safely
        </h2>
        <p className="text-sm text-neutral-400">
          Fill the details below. Your brand color helps us render a matching
          favicon.
        </p>
      </div>
    </>
  );
}
