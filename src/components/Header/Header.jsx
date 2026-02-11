// import logo from "/src/assets/bundlescope.png";
const Header = () => {
  return (
    <header className="py-4">
      <div className="max-w-7xl mx-auto px-4 xl:px-0 flex items-center justify-between gap-x-4 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:justify-stretch lg:gap-x-12">
        <a href="/" title="Home">
          {/* <img className="h-8" src={logo} alt="Logo" /> */}
        </a>
        <nav className="hidden lg:block">
          <ul className="flex items-center">
            <li>
              <a
                className="px-3 py-2 text-sm font-medium text-neutral-700 transition hover:text-neutral-600"
                href="#"
              >
                Features
              </a>
            </li>
            <li>
              <a
                className="px-3 py-2 text-sm font-medium text-neutral-700 transition hover:text-neutral-600"
                href="#"
              >
                Docs
              </a>
            </li>

            <li>
              <a
                className="flex items-center gap-x-1.5 px-3 py-2 text-sm font-medium text-neutral-700 transition hover:text-neutral-600"
                href="#"
              >
                Contact
                <svg
                  className="h-4 text-neutral-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex flex-wrap items-center justify-center gap-3 justify-self-end lg:flex-nowrap lg:gap-x-2">
          <a
            href="#"
            title="Log in"
            className="items-center justify-center whitespace-nowrap text-sm font-medium transition-all focus:shadow-[0_0px_0px_2px_rgba(15,23,42,0.25),0_2px_10px_0px_rgba(0,0,0,0.05)] shadow-[0_2px_10px_0px_rgba(0,0,0,0.05)] border border-neutral-100 bg-white text-neutral-700 hover:border-neutral-200 hover:bg-neutral-100 disabled:border-slate-900/5 disabled:bg-slate-50/30 disabled:text-slate-900/20 px-3 py-2 rounded-[0.625rem] hidden lg:flex"
          >
            Log in
          </a>
          <a
            href="#"
            title="Try free"
            className="items-center justify-center whitespace-nowrap text-sm font-medium transition-all focus:shadow-[0_0px_0px_2px_rgba(15,23,42,0.25),0_2px_10px_0px_rgba(0,0,0,0.05)] shadow-[0_2px_10px_0px_rgba(0,0,0,0.05)] bg-slate-900 text-white hover:bg-slate-800 disabled:bg-slate-900/30 disabled:text-slate-50/70 px-3 py-2 rounded-[0.625rem] flex"
          >
            Try free
          </a>
          <button
            type="button"
            aria-label="Open menu"
            className="lg:hidden"
            title="Open menu"
          >
            <svg
              className="h-6 text-slate-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
            >
              <path
                fillRule="evenodd"
                d="M3 9a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9Zm0 6.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
