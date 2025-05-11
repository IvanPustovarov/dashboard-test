const BASE_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

const getHeaders = () => ({
  "Content-Type": "application/json",
  apikey: API_KEY,
});

export const getFetcher = async <T>(url: string): Promise<T> => {
  const res = await fetch(`${BASE_URL}${url}`, {
    method: "GET",
    headers: getHeaders(),
  });

  if (!res.ok) throw new Error(`Ошибка: ${res.statusText}`);
  return res.json();
};

export const postFetcher = async <T, B>(url: string, body: B): Promise<T> => {
  const res = await fetch(`${BASE_URL}${url}`, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify(body),
  });

  if (!res.ok) throw new Error(`Ошибка: ${res.statusText}`);
  return res.json();
};
