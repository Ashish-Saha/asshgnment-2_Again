export default function FormFavColor({ onFormChange, formData }) {
  return (
    <>
      <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5 text-sm transition focus-within:border-blue-500 focus-within:bg-neutral-900 focus-within:shadow-lg focus-within:shadow-blue-500/10">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
              Favicon color
            </p>
            <p className="text-xs text-neutral-500">
              Select the accent color we should render.
            </p>
          </div>
          <input
            type="color"
            // value="#3b82f6"
            name="favColor"
            value={formData.favcolor}
            onChange={(e)=>onFormChange(e.target)}
            className="h-12 w-12 cursor-pointer rounded-full border border-neutral-700 bg-neutral-800 p-1 shadow-inner shadow-black/50"
          />
        </div>
        <div className="mt-5 flex items-center gap-3 text-xs text-neutral-500">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-neutral-700 bg-neutral-800/80 text-[10px] font-semibold uppercase text-neutral-400">
            Hex
          </span>
          <span>Matches any brand primary color.</span>
        </div>
      </div>
    </>
  );
}
