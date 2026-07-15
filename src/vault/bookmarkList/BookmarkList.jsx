

import React from 'react'

export default function BookmarkList() {
  return (
    <>
      <main className="p-8">
            <div className="max-w-7xl mx-auto space-y-10 px-4">
                
                <section
                    className="rounded-3xl border border-neutral-800 bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 p-6 shadow-2xl shadow-black/40 backdrop-blur"
                >
                    <div
                        className="flex flex-col gap-4 lg:flex-row lg:items-center"
                    >
                       
                        <label className="relative flex-1">
                            <span
                                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500"
                            >
                                <svg
                                    className="h-4 w-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    ></path>
                                </svg>
                            </span>
                            <input
                                type="text"
                                placeholder="Search saved credentials"
                                className="w-full rounded-2xl border border-neutral-800 bg-neutral-950/60 py-3 pl-11 pr-4 text-sm text-white placeholder:text-neutral-500 transition focus:border-blue-500 focus:bg-neutral-950 focus:outline-none"
                            />
                        </label>

                        <div className="flex flex-wrap gap-2">
                            <button
                                className="inline-flex items-center gap-2 rounded-2xl border border-neutral-800/80 bg-neutral-900/80 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-neutral-300 transition hover:border-blue-500 hover:text-white"
                            >
                                <svg
                                    className="h-4 w-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M3 4h18l-8 8v6l-4 4v-8z"
                                    ></path>
                                </svg>
                                Sort by
                            </button>
                        </div>
                    </div>
                </section>

                
                <div
                    className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
                >
                    
                    <article
                        className="rounded-3xl border border-neutral-800 bg-neutral-900/70 p-6 shadow-2xl shadow-black/30 transition hover:-translate-y-1 hover:border-blue-500/60 hover:shadow-blue-500/20"
                    >
                        <div className="flex items-start justify-between">
                            <div className="flex items-center gap-4">
                                <div
                                    className="flex h-12 w-12 items-center justify-center rounded-2xl border border-neutral-800 bg-blue-500/10 text-sm font-semibold uppercase text-blue-400"
                                >
                                    Fb
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold">
                                        Facebook
                                    </h3>
                                    <p
                                        className="text-xs uppercase tracking-wide text-neutral-500"
                                    >
                                        Social
                                    </p>
                                </div>
                            </div>
                        </div>
                        <p className="mt-4 text-sm text-neutral-400">
                            facebook.com
                        </p>
                        <dl className="mt-5 space-y-3 text-sm">
                            <div
                                className="flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900/60 px-4 py-3"
                            >
                                <dt
                                    className="text-xs uppercase tracking-wide text-neutral-500"
                                >
                                    Username
                                </dt>
                                <dd className="text-neutral-50">
                                    john.doe@email.com
                                </dd>
                            </div>
                            <div
                                className="flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900/60 px-4 py-3"
                            >
                                <dt
                                    className="text-xs uppercase tracking-wide text-neutral-500"
                                >
                                    Password
                                </dt>
                                <dd
                                    className="flex items-center gap-2 text-neutral-50"
                                >
                                    <span>••••••••</span>
                                    <button
                                        className="text-xs font-semibold text-blue-400"
                                    >
                                        Reveal
                                    </button>
                                </dd>
                            </div>
                        </dl>
                    </article>

                    
                    <article
                        className="rounded-3xl border border-neutral-800 bg-neutral-900/70 p-6 shadow-2xl shadow-black/30 transition hover:-translate-y-1 hover:border-blue-500/60 hover:shadow-blue-500/20"
                    >
                        <div className="flex items-start justify-between">
                            <div className="flex items-center gap-4">
                                <div
                                    className="flex h-12 w-12 items-center justify-center rounded-2xl border border-neutral-800 bg-red-500/10 text-sm font-semibold uppercase text-red-400"
                                >
                                    Yt
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold">
                                        YouTube
                                    </h3>
                                    <p
                                        className="text-xs uppercase tracking-wide text-neutral-500"
                                    >
                                        Video
                                    </p>
                                </div>
                            </div>
                        </div>
                        <p className="mt-4 text-sm text-neutral-400">youtube.com</p>
                        <dl className="mt-5 space-y-3 text-sm">
                            <div
                                className="flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900/60 px-4 py-3"
                            >
                                <dt
                                    className="text-xs uppercase tracking-wide text-neutral-500"
                                >
                                    Username
                                </dt>
                                <dd className="text-neutral-50">myaccount</dd>
                            </div>
                            <div
                                className="flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900/60 px-4 py-3"
                            >
                                <dt
                                    className="text-xs uppercase tracking-wide text-neutral-500"
                                >
                                    Password
                                </dt>
                                <dd
                                    className="flex items-center gap-2 text-neutral-50"
                                >
                                    <span>••••••••</span>
                                    <button
                                        className="text-xs font-semibold text-blue-400"
                                    >
                                        Reveal
                                    </button>
                                </dd>
                            </div>
                        </dl>
                    </article>

                    
                    <article
                        className="rounded-3xl border border-neutral-800 bg-neutral-900/70 p-6 shadow-2xl shadow-black/30 transition hover:-translate-y-1 hover:border-blue-500/60 hover:shadow-blue-500/20"
                    >
                        <div className="flex items-start justify-between">
                            <div className="flex items-center gap-4">
                                <div
                                    className="flex h-12 w-12 items-center justify-center rounded-2xl border border-neutral-800 bg-pink-500/10 text-sm font-semibold uppercase text-pink-300"
                                >
                                    Db
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold">
                                        Dribbble
                                    </h3>
                                    <p
                                        className="text-xs uppercase tracking-wide text-neutral-500"
                                    >
                                        Design
                                    </p>
                                </div>
                            </div>
                        </div>
                        <p className="mt-4 text-sm text-neutral-400">
                            dribbble.com
                        </p>
                        <dl className="mt-5 space-y-3 text-sm">
                            <div
                                className="flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900/60 px-4 py-3"
                            >
                                <dt
                                    className="text-xs uppercase tracking-wide text-neutral-500"
                                >
                                    Username
                                </dt>
                                <dd className="text-neutral-50">designer_pro</dd>
                            </div>
                            <div
                                className="flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900/60 px-4 py-3"
                            >
                                <dt
                                    className="text-xs uppercase tracking-wide text-neutral-500"
                                >
                                    Password
                                </dt>
                                <dd
                                    className="flex items-center gap-2 text-neutral-50"
                                >
                                    <span>••••••••</span>
                                    <button
                                        className="text-xs font-semibold text-blue-400"
                                    >
                                        Reveal
                                    </button>
                                </dd>
                            </div>
                        </dl>
                    </article>

                    
                    <article
                        className="rounded-3xl border border-neutral-800 bg-neutral-900/70 p-6 shadow-2xl shadow-black/30 transition hover:-translate-y-1 hover:border-blue-500/60 hover:shadow-blue-500/20"
                    >
                        <div className="flex items-start justify-between">
                            <div className="flex items-center gap-4">
                                <div
                                    className="flex h-12 w-12 items-center justify-center rounded-2xl border border-neutral-800 bg-purple-500/10 text-sm font-semibold uppercase text-purple-300"
                                >
                                    Tw
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold">
                                        Twitch
                                    </h3>
                                    <p
                                        className="text-xs uppercase tracking-wide text-neutral-500"
                                    >
                                        Streaming
                                    </p>
                                </div>
                            </div>
                        </div>
                        <p className="mt-4 text-sm text-neutral-400">twitch.tv</p>
                        <dl className="mt-5 space-y-3 text-sm">
                            <div
                                className="flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900/60 px-4 py-3"
                            >
                                <dt
                                    className="text-xs uppercase tracking-wide text-neutral-500"
                                >
                                    Username
                                </dt>
                                <dd className="text-neutral-50">streamer_123</dd>
                            </div>
                            <div
                                className="flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900/60 px-4 py-3"
                            >
                                <dt
                                    className="text-xs uppercase tracking-wide text-neutral-500"
                                >
                                    Password
                                </dt>
                                <dd
                                    className="flex items-center gap-2 text-neutral-50"
                                >
                                    <span>••••••••</span>
                                    <button
                                        className="text-xs font-semibold text-blue-400"
                                    >
                                        Reveal
                                    </button>
                                </dd>
                            </div>
                        </dl>
                    </article>

                   
                    <article
                        className="rounded-3xl border border-neutral-800 bg-neutral-900/70 p-6 shadow-2xl shadow-black/30 transition hover:-translate-y-1 hover:border-blue-500/60 hover:shadow-blue-500/20"
                    >
                        <div className="flex items-start justify-between">
                            <div className="flex items-center gap-4">
                                <div
                                    className="flex h-12 w-12 items-center justify-center rounded-2xl border border-neutral-800 bg-neutral-500/10 text-sm font-semibold uppercase text-neutral-300"
                                >
                                    Gh
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold">
                                        GitHub
                                    </h3>
                                    <p
                                        className="text-xs uppercase tracking-wide text-neutral-500"
                                    >
                                        Productivity
                                    </p>
                                </div>
                            </div>
                        </div>
                        <p className="mt-4 text-sm text-neutral-400">github.com</p>
                        <dl className="mt-5 space-y-3 text-sm">
                            <div
                                className="flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900/60 px-4 py-3"
                            >
                                <dt
                                    className="text-xs uppercase tracking-wide text-neutral-500"
                                >
                                    Username
                                </dt>
                                <dd className="text-neutral-50">devuser</dd>
                            </div>
                            <div
                                className="flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900/60 px-4 py-3"
                            >
                                <dt
                                    className="text-xs uppercase tracking-wide text-neutral-500"
                                >
                                    Password
                                </dt>
                                <dd
                                    className="flex items-center gap-2 text-neutral-50"
                                >
                                    <span>••••••••</span>
                                    <button
                                        className="text-xs font-semibold text-blue-400"
                                    >
                                        Reveal
                                    </button>
                                </dd>
                            </div>
                        </dl>
                    </article>

                    
                    <article
                        className="rounded-3xl border border-neutral-800 bg-neutral-900/70 p-6 shadow-2xl shadow-black/30 transition hover:-translate-y-1 hover:border-blue-500/60 hover:shadow-blue-500/20"
                    >
                        <div className="flex items-start justify-between">
                            <div className="flex items-center gap-4">
                                <div
                                    className="flex h-12 w-12 items-center justify-center rounded-2xl border border-neutral-800 bg-red-600/10 text-sm font-semibold uppercase text-red-400"
                                >
                                    Nx
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold">
                                        Netflix
                                    </h3>
                                    <p
                                        className="text-xs uppercase tracking-wide text-neutral-500"
                                    >
                                        Entertainment
                                    </p>
                                </div>
                            </div>
                        </div>
                        <p className="mt-4 text-sm text-neutral-400">netflix.com</p>
                        <dl className="mt-5 space-y-3 text-sm">
                            <div
                                className="flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900/60 px-4 py-3"
                            >
                                <dt
                                    className="text-xs uppercase tracking-wide text-neutral-500"
                                >
                                    Username
                                </dt>
                                <dd className="text-neutral-50">user@email.com</dd>
                            </div>
                            <div
                                className="flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900/60 px-4 py-3"
                            >
                                <dt
                                    className="text-xs uppercase tracking-wide text-neutral-500"
                                >
                                    Password
                                </dt>
                                <dd
                                    className="flex items-center gap-2 text-neutral-50"
                                >
                                    <span>••••••••</span>
                                    <button
                                        className="text-xs font-semibold text-blue-400"
                                    >
                                        Reveal
                                    </button>
                                </dd>
                            </div>
                        </dl>
                    </article>

                   
                    <article
                        className="rounded-3xl border border-neutral-800 bg-neutral-900/70 p-6 shadow-2xl shadow-black/30 transition hover:-translate-y-1 hover:border-blue-500/60 hover:shadow-blue-500/20"
                    >
                        <div className="flex items-start justify-between">
                            <div className="flex items-center gap-4">
                                <div
                                    className="flex h-12 w-12 items-center justify-center rounded-2xl border border-neutral-800 bg-yellow-500/10 text-sm font-semibold uppercase text-yellow-400"
                                >
                                    Am
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold">
                                        Amazon
                                    </h3>
                                    <p
                                        className="text-xs uppercase tracking-wide text-neutral-500"
                                    >
                                        Shopping
                                    </p>
                                </div>
                            </div>
                        </div>
                        <p className="mt-4 text-sm text-neutral-400">amazon.com</p>
                        <dl className="mt-5 space-y-3 text-sm">
                            <div
                                className="flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900/60 px-4 py-3"
                            >
                                <dt
                                    className="text-xs uppercase tracking-wide text-neutral-500"
                                >
                                    Username
                                </dt>
                                <dd className="text-neutral-50">
                                    shopper@email.com
                                </dd>
                            </div>
                            <div
                                className="flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900/60 px-4 py-3"
                            >
                                <dt
                                    className="text-xs uppercase tracking-wide text-neutral-500"
                                >
                                    Password
                                </dt>
                                <dd
                                    className="flex items-center gap-2 text-neutral-50"
                                >
                                    <span>••••••••</span>
                                    <button
                                        className="text-xs font-semibold text-blue-400"
                                    >
                                        Reveal
                                    </button>
                                </dd>
                            </div>
                        </dl>
                    </article>

                    
                    <article
                        className="rounded-3xl border border-neutral-800 bg-neutral-900/70 p-6 shadow-2xl shadow-black/30 transition hover:-translate-y-1 hover:border-blue-500/60 hover:shadow-blue-500/20"
                    >
                        <div className="flex items-start justify-between">
                            <div className="flex items-center gap-4">
                                <div
                                    className="flex h-12 w-12 items-center justify-center rounded-2xl border border-neutral-800 bg-green-500/10 text-sm font-semibold uppercase text-green-400"
                                >
                                    Sp
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold">
                                        Spotify
                                    </h3>
                                    <p
                                        className="text-xs uppercase tracking-wide text-neutral-500"
                                    >
                                        Music
                                    </p>
                                </div>
                            </div>
                        </div>
                        <p className="mt-4 text-sm text-neutral-400">spotify.com</p>
                        <dl className="mt-5 space-y-3 text-sm">
                            <div
                                className="flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900/60 px-4 py-3"
                            >
                                <dt
                                    className="text-xs uppercase tracking-wide text-neutral-500"
                                >
                                    Username
                                </dt>
                                <dd className="text-neutral-50">musiclover</dd>
                            </div>
                            <div
                                className="flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900/60 px-4 py-3"
                            >
                                <dt
                                    className="text-xs uppercase tracking-wide text-neutral-500"
                                >
                                    Password
                                </dt>
                                <dd
                                    className="flex items-center gap-2 text-neutral-50"
                                >
                                    <span>••••••••</span>
                                    <button
                                        className="text-xs font-semibold text-blue-400"
                                    >
                                        Reveal
                                    </button>
                                </dd>
                            </div>
                        </dl>
                    </article>
                </div>
            </div>
        </main>
    </>
  )
}
