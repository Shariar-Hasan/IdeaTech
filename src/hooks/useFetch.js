import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  useEffect(() => {
    function fetchData() {
      setIsLoading(true);
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
    fetchData();
  }, []);
  return {
    data,
    isLoading,
    error,
  };
};

export default useFetch;
