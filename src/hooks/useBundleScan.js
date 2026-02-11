import { useEffect, useState } from "react";

// bundlescan API call
export default function useBundleScan({ name, version }) {
  const [packageData, setPackageData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    if (!name || !version) return;

    const packageVersion = version || "latest";
    const api = `https://registry.npmjs.com/${encodeURIComponent(
      name
    )}/${encodeURIComponent(packageVersion)}`;

    // setLoading(true);
    // setError(null);
    // API call for the package data
    fetch(api)
      .then((response) => {
        if (!response.ok) throw new Error("HTTP Error" + response.status);
        return response.json();
      })
      .then((data) => {
        const packageData = {
          name: data?.name,
          version: data?.version,
          homepage: data?.homepage,
          unpackedSize: Math.floor(data?.dist.unpackedSize / 1024),
          github: data?.repository.url.replace("git+", ""),
          tarball: data?.dist.tarball,
          fileCount: data?.dist.fileCount,
          license: data?.license,
        };
        setPackageData(packageData);
      })
      .catch((error) => setError(error.message || "Something went wrong."))
      .finally(() => setLoading(false));
  }, [name, version]);
  return { packageData, loading, error };
}
