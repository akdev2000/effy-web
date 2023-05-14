import { useState } from "react";
import { API_BASE_URL } from "./helpers/constants";

export function useGet(path: string) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);
  const [data, setData] = useState<ResponseData>();

  async function fetchData(params?: string) {
    const data = await fetch(`${API_BASE_URL}/${path}` + (params ? params : ""))
      .then((res) => res.json())
      .catch((e) => {
        setError(e);
      })
      .finally(() => {
        setLoading(false);
      });
    setData(data);
  }

  return {
    loading,
    data,
    error,
    fetchData,
  };
}

interface ResponseData {
  status: "success" | "failed";
  message: string;
  data: any;
}

export function usePost(path: string) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);
  const [data, setData] = useState<ResponseData>();

  async function fetchData(body?: any, params?: string) {
    const data: ResponseData = await fetch(
      `${API_BASE_URL}/${path}` + (params ? params : ""),
      {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .catch((e) => {
        setError(e);
      })
      .finally(() => {
        setLoading(false);
      });
    setData(data);
  }

  return {
    fetchData,
    loading,
    data,
    error,
  };
}
