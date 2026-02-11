import { Link } from "react-router-dom";
// Custom Hooks
import { useState } from "react";
import { useBundleSearch } from "../../hooks/useBundleSearch";
// log
import logo from "../../assets/BundleScan.png";
const BundleScan = () => {
  const [query, setQuery] = useState("");
  const { data, loading } = useBundleSearch(query);
  console.log(data);
  return (
    <>
      {/* Content */}
      <div className="h-screen flex flex-col pb-6 bg-neutral-900">
        <div className="h-full flex flex-col justify-center">
          <div className="-mt-20 max-w-4xl w-full text-center mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-4 flex justify-center items-center">
              {/* Logo */}
              <a
                className="flex-none rounded-md text-xl inline-block font-semibold focus:outline-hidden focus:opacity-80 text-amber-50"
                href="../templates.html"
                aria-label="BundleScan"
              >
                <img src={logo} alt="BundleScan" className="w-20" />
              </a>
              {/* End Logo */}

              <div className="ms-2"></div>
            </div>

            <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
              Scan Your NPM Bundles
            </h1>
          </div>

          {/* Search */}
          <div className="mt-10 max-w-2xl w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative">
              <input
                type={query}
                onChange={(e) => setQuery(e.target.value)}
                className="p-3 sm:p-4 block w-full rounded-full sm:text-sm disabled:opacity-50 disabled:pointer-events-none bg-neutral-900 border border-neutral-700 text-neutral-400 placeholder-neutral-500"
                placeholder="NPM Package Name"
              />
              <div className="absolute top-1/2 end-2 -translate-y-1/2">
                <button
                  type="button"
                  className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:text-gray-800 focus:outline-hidden focus:text-gray-800 bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:bg-neutral-800 dark:hover:text-white dark:focus:text-white"
                >
                  <svg
                    className="shrink-0 size-4 text-gray-400 dark:text-white/60"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                </button>
              </div>
            </div>
            {loading ? (
              <div className="z-10 rounded-lg shadow-lg w-full lg:w-44">
                <p className="text-amber-50">Searching...</p>
              </div>
            ) : query.length < 2 ? (
              <div></div>
            ) : (
              <div className="z-10 rounded-lg shadow-lg w-full bg-neutral-800">
                <ul className="p-2 text-sm">
                  {data.map((info) => (
                    <li>
                      <Link
                        to={`/package/${info.name}/${info.version}`}
                        className="inline-flex items-center w-full p-2 hover:bg-neutral-900 hover:text-heading rounded text-amber-50"
                      >
                        {info.name} v{info.version}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          {/* End Search */}
        </div>

        <footer className="mt-auto max-w-4xl text-center mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-gray-600 dark:text-neutral-500">
            © 2026  Developed by <a href="https://github.com/razRajput2111">RajRajput</a>
          </p>
        </footer>
      </div>
      {/* End Content */}

      <section className="py-6 hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 xl:px-0 flex flex-col items-center text-center">
          <span class="text-9xl">Bundle Scope</span>
        </div>
      </section>
    </>
  );
};

export default BundleScan;
