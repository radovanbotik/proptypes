import React from "react";
import { useState, useEffect } from "react";
export default function useFetch(url) {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const resp = await fetch(url);
    const answ = await resp.json();
    setData(answ);
  };

  useEffect(() => {
    fetchData();
  }, [url]);
  return { data };
}
