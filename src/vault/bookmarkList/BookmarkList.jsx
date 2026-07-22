import { useState } from "react";
import {
  getDomainName,
  getHostname,
  webLogoName,
} from "../../tools/getDomainName";
import Search from "./Search";

export default function BookmarkList({ valtList, ontoggle }) {
  const [searchInput, setSearchInput] = useState("");
  const [sortType, setSortType] = useState("");

  // const filterSearch = [...valtList].filter(
  //   (item) =>
  //     item.userName.toLowerCase().includes(searchInput.toLowerCase()) ||
  //     item.catagory.toLowerCase().includes(searchInput.toLowerCase()) ||
  //     getDomainName(item.url).toLowerCase().includes(searchInput.toLowerCase()),
  // );

  const filterSearch = [...valtList]
    .sort((a, b) => {
      const dominA = getDomainName(a.url);
      const dominB = getDomainName(b.url);

      if (sortType === "a-z") {
        return dominA.localeCompare(dominB);
      } else if (sortType === "z-a") {
        return dominB.localeCompare(dominA);
      } else if (sortType === "dateOld") {
        return a.createdAt.localeCompare(b.createdAt);
      } else if (sortType === "dateNew") {
        return b.createdAt.localeCompare(a.createdAt);
      }

      return 0

    })
    .filter(
      (item) =>
        item.userName.toLowerCase().includes(searchInput.toLowerCase()) ||
        item.catagory.toLowerCase().includes(searchInput.toLowerCase()) ||
        getDomainName(item.url)
          .toLowerCase()
          .includes(searchInput.toLowerCase()),
    );

  const handleSortClick = (orderType) => {
    setSortType(orderType);
  };

  return (
    <>
      <main className="p-8">
        <div className="max-w-7xl mx-auto space-y-10 px-4">
          <Search
            searchInput={searchInput}
            onSearch={setSearchInput}
            onSortClick={handleSortClick}
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filterSearch.length === 0 ? (<p className="text-center col-span-full text-gray-400">Not Found Data</p>) :  filterSearch.map((valt) => (
              <article
                key={valt.id}
                className="rounded-3xl border border-neutral-800 bg-neutral-900/70 p-6 shadow-2xl shadow-black/30 transition hover:-translate-y-1 hover:border-blue-500/60 hover:shadow-blue-500/20"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl border border-neutral-800 bg-blue-500/10 text-sm font-semibold uppercase `}
                      style={{ color: valt.favColor }}
                    >
                      {webLogoName(valt.url)}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">
                        {getDomainName(valt.url)}
                      </h3>
                      <p className="text-xs uppercase tracking-wide text-neutral-500">
                        {valt.catagory}
                      </p>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-sm text-neutral-400">
                  {getHostname(valt.url)}
                </p>
                <dl className="mt-5 space-y-3 text-sm">
                  <div className="flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900/60 px-4 py-3">
                    <dt className="text-xs uppercase tracking-wide text-neutral-500">
                      Username
                    </dt>
                    <dd className="text-neutral-50">{valt.userName}</dd>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900/60 px-4 py-3">
                    <dt className="text-xs uppercase tracking-wide text-neutral-500">
                      Password
                    </dt>
                    <dd className="flex items-center gap-2 text-neutral-50">
                      <span>
                        {valt.isMasking
                          ? valt.password
                          : "*".repeat(valt.password?.length ?? 0)}
                      </span>
                      <button
                        className="text-xs font-semibold text-blue-400"
                        onClick={() => ontoggle(valt.id)}
                      >
                        Reveal
                      </button>
                    </dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
