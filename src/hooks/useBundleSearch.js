import { useEffect, useState } from "react";

export function useBundleSearch(q) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    // Removing the whitespace
    const query = (q || "").trim();
    // Checking the query if it is empty return with the deafult value
    if (query.length < 2) {
      setData([]);
      setLoading(false);
      setError(null);
      return;
    }
    setLoading(true);
    setError(false);
    fetch(
      "https://registry.npmjs.org/-/v1/search?text=" +
        encodeURIComponent(query) +
        "&size=10"
    )
      .then((response) => {
        if (!response.ok) throw new Error("HTTP Error" + response.status);
        return response.json();
      })
      .then((data) => {
        const packageInformation = (data.objects || [])
          .map((object) => ({
            name: object.package && object.package.name,
            version: object.package && object.package.version,
          }))
          .filter(Boolean);
        setData(packageInformation);
      })
      .catch((error) => setError(error.message || "Something went wrong"))
      .finally(() => setLoading(false));
  }, [q]);
  return { data, loading, error };
}

// TODO: Getting error on 1 chracter
