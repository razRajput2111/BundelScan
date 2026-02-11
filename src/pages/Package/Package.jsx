import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

// Hooks
import useBundleScope from "../../hooks/useBundleScope";

// GraphChart
import Apexcharts from "../../components/ReactApexChart/Apexcharts";

const Package = () => {
  const { pathname } = useLocation();
  const [name, setName] = useState("");
  const [version, setVersion] = useState("");
  const { packageData, loading, error } = useBundleScope({ name, version });
  const [monthlyDownloads, setMonthlyDownloads] = useState("");
  const [yearlyDownloads, setYearlyDownloads] = useState("");

  const [minified, setMinified] = useState({});

  console.log("data", minified);

  // const {}
  // Set the bundle name
  useEffect(() => {
    const temp = pathname.replace("/package/", "");
    const temp1 = temp.split("/");
    const version1 = temp1.pop();
    const name1 = temp1.join("/");
    setName(name1);
    setVersion(version1);
  }, [pathname]);
  // Monthly Downloads data
  useEffect(() => {
    if (!name) return;

    fetch(`https://api.npmjs.org/downloads/point/last-month/${name}`)
      .then((response) => response.json())
      .then((data) => setMonthlyDownloads(data.downloads))
      .catch((error) => console.log(error));
  }, [name]);
  // Weekly downloads data
  useEffect(() => {
    if (!name) return;

    fetch(`https://api.npmjs.org/downloads/point/last-year/${name}`)
      .then((response) => response.json())
      .then((data) => setYearlyDownloads(data.downloads))
      .catch((error) => console.log(error));
  }, [name]);

  // Minified and Gzip
  useEffect(() => {
    if (!name) return;
    fetch(`https://bundlephobia.com/api/size?package=${name}`)
      .then((response) => response.json())
      .then((data) =>
        setMinified({
          minified: data.size,
          gzip: data.gzip,
        })
      );
  }, [name]);

  return (
    <>
      {/* HEADER */}
      <header className="sticky top-0 inset-x-0 flex lg:ps-65 flex-wrap md:justify-start md:flex-nowrap z-48 w-full bg-white border-b border-gray-200 text-sm py-2.5 dark:bg-neutral-800 dark:border-neutral-700">
        <nav className="px-4 sm:px-6 flex basis-full items-center w-full mx-auto">
          <div className="me-5 lg:me-0 flex items-center">
            <div className="w-full flex items-center justify-end ms-auto md:justify-between gap-x-1 md:gap-x-3">
              <span className="py-4 ps-10 pe-16 block w-full bg-white border-gray-200 rounded-lg text-sm focus:outline-hidden focus:border-blue-500 focus:ring-blue-500 checked:border-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder:text-neutral-400 dark:focus:ring-neutral-600 border">
                {name} @ {version}
              </span>
            </div>
          </div>
        </nav>
      </header>

      {/* Content */}
      <div className="w-full lg:h-screen bg-neutral-900 lg:px-65">
        <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* Downlaods */}
            <div className="flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
              <div className="p-4 md:p-5">
                <div className="flex items-center gap-x-2">
                  <p className="text-xs uppercase text-gray-500 dark:text-neutral-500">
                    Last Month Downloads
                  </p>
                </div>
                <div className="mt-1 flex items-center gap-x-2">
                  <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
                    {monthlyDownloads}
                  </h3>
                </div>
              </div>
            </div>

            {/* unpackedSize */}
            <div className="flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
              <div className="p-4 md:p-5">
                <div className="flex items-center gap-x-2">
                  <p className="text-xs uppercase text-gray-500 dark:text-neutral-500">
                    unpackedSize
                  </p>
                </div>

                <div className="mt-1 flex items-center gap-x-2">
                  <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
                    {packageData.unpackedSize} KB
                  </h3>
                </div>
              </div>
            </div>

            {/* fileCount */}
            <div className="flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
              <div className="p-4 md:p-5">
                <div className="flex items-center gap-x-2">
                  <p className="text-xs uppercase text-gray-500 dark:text-neutral-500">
                    fileCount
                  </p>
                </div>

                <div className="mt-1 flex items-center gap-x-2">
                  <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
                    {packageData.fileCount}
                  </h3>
                </div>
              </div>
            </div>

            {/* license */}
            <div className="flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
              <div className="p-4 md:p-5">
                <div className="flex items-center gap-x-2">
                  <p className="text-xs uppercase text-gray-500 dark:text-neutral-500">
                    license
                  </p>
                </div>

                <div className="mt-1 flex items-center gap-x-2">
                  <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
                    {packageData.license}
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 ">
            {/* Montlhly donwloads graphs */}
            <div className="p-4 md:p-5 min-h-102.5 flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
              <div className="flex flex-wrap justify-between items-center gap-2">
                <div>
                  <h2 className="text-sm text-gray-500 dark:text-neutral-500">
                    Last Year Downloads
                  </h2>
                  <p className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
                    {yearlyDownloads}
                  </p>
                </div>
              </div>

              <Apexcharts mode="light" name={name} />
            </div>

            {/* BundlePhobia */}
            <div className="p-4 md:p-5 min-h-102.5 flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl dark:bg-neutral-800 dark:border-neutral-700 gap-4 sm:gap-6">
              {/* Card */}
              <div className="flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
                <div className="p-4 md:p-5">
                  <div className="flex items-center gap-x-2">
                    <p className="text-xs uppercase text-gray-500 dark:text-neutral-500">
                      Minified Size
                    </p>
                  </div>
                  <div className="mt-1 flex items-center gap-x-2">
                    <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
                      {Math.floor((minified.minified / 1024) * 100) / 100} kB
                    </h3>
                  </div>
                </div>
              </div>

              {/* Card */}
              <div className="flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
                <div className="p-4 md:p-5">
                  <div className="flex items-center gap-x-2">
                    <p className="text-xs uppercase text-gray-500 dark:text-neutral-500">
                      Minified + Gzipped size
                    </p>
                  </div>
                  <div className="mt-1 flex items-center gap-x-2">
                    <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
                      {Math.floor((minified.gzip / 1024) * 100) / 100} kB
                    </h3>
                  </div>
                </div>
              </div>

              {/* Home Page */}
              <a
                href={packageData.homepage}
                target="_blank"
                className="flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl dark:bg-neutral-800 dark:border-neutral-700 hover:bg-neutral-900"
              >
                <div className="p-4 md:p-5">
                  <div className="flex items-center gap-x-2">
                    <p className="text-xs uppercase text-gray-500 dark:text-neutral-500">
                      Visit
                    </p>
                  </div>
                  <div className="mt-1 flex items-center gap-x-2">
                    <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
                      Home Page
                    </h3>
                  </div>
                </div>
              </a>

              {/* Github */}
              <a
                href={packageData.github}
                target="_blank"
                className="flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl dark:bg-neutral-800 dark:border-neutral-700 hover:bg-neutral-900"
              >
                <div className="p-4 md:p-5">
                  <div className="flex items-center gap-x-2">
                    <p className="text-xs uppercase text-gray-500 dark:text-neutral-500">
                      Visit
                    </p>
                  </div>
                  <div className="mt-1 flex items-center gap-x-2">
                    <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
                      Github
                    </h3>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Package;
// TODO:
