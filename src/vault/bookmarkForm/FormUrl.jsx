export default function FormUrl({ onFormChange, formData, error }) {
  return (
    <>
      <label className="flex flex-col gap-3 rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5 text-sm transition focus-within:border-blue-500 focus-within:bg-neutral-900 focus-within:shadow-lg focus-within:shadow-blue-500/10">
        <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
          Website URL
        </span>
        <input
          type="url"
          placeholder="https://example.com"
          className="w-full bg-transparent text-base text-white placeholder:text-neutral-500 focus:outline-none"
          name="url"
          value={formData.url}
          onChange={(e) => onFormChange(e.target)}
        />
        <span className="text-xs text-neutral-500">
          Include https:// for best results.
        </span>
        <span className="text-red-500 font-bold">{error.url}</span>
      </label>
    </>
  );
}
