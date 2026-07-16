import FormCategory from "./FormCategory";
import FormFavColor from "./FormFavColor";
import FormHeader from "./FormHeader";
import FormUrl from "./FormUrl";
import Password from "./Password";
import UserName from "./UserName";

export default function BookMarkForm() {
  return (
    <>
      <div className="max-w-7xl mx-auto mt-8 px-4">
        <form className="mb-10 rounded-2xl border border-neutral-800 bg-gradient-to-br from-neutral-900/70 to-neutral-800/40 p-8 shadow-2xl shadow-black/40 backdrop-blur">
          <FormHeader />

          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <FormUrl />
              <FormFavColor />
              <FormCategory />
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <UserName />
              <Password />
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="text-xs text-neutral-500">
              By submitting you confirm the entry is safe to store.
            </div>
            <div className="flex flex-1 justify-end gap-3">
              <button
                type="reset"
                className="w-full rounded-full border border-neutral-700 px-6 py-3 text-sm font-semibold text-neutral-200 transition hover:border-neutral-500 hover:text-white md:w-auto"
              >
                Clear
              </button>
              <button
                type="submit"
                className="w-full rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500 md:w-auto"
              >
                Add Bookmark
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
