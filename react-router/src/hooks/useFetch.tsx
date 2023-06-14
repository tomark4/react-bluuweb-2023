import { useState, useEffect, useCallback } from "react";

interface Params {
  uri: string;
  initialData?: any;
}

const useFetch = <T extends unknown>({ uri, initialData }: Params) => {
  const [data, setData] = useState<T>(initialData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setError(null);
      setLoading(true);
      const resp = await fetch(uri);

      if (!resp.ok) throw new Error("fetch uri error");

      const data = await resp.json();
      setData(data);
    } catch (e) {
      console.error(e);
      setError(e);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error };
};

export default useFetch;
