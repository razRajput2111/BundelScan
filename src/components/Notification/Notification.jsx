// import { Link } from "react-router-dom";

const Notification = ({}) => {
  return (
    <section className="bg-slate-100 py-2">
      <div className="max-w-7xl mx-auto px-4 xl:px-0 flex items-center justify-between gap-x-2">
        <div className="flex w-full grow items-center gap-x-2 justify-self-center md:justify-center">
          <div className="items-center justify-center rounded-full text-sm font-medium whitespace-nowrap shadow-[0_2px_10px_0px_rgba(0,0,0,0.15)] inline-flex bg-slate-900 text-white px-2 py-0.5">
            <svg
              className="h-3 shrink-0 mr-1.5 text-slate-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
            >
              <path
                fillRule="evenodd"
                d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z"
                clipRule="evenodd"
              />
            </svg>
            New
          </div>
          <div className="text-sm font-medium text-neutral-700">
            Now can search the NPM Packages.
          </div>
        </div>
        <button
          className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-3xl bg-neutral-200 p-1 transition hover:bg-neutral-300"
          type="button"
          aria-label="Close bar"
        >
          <svg
            className="h-4 text-neutral-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
            data-slot="icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Notification;
